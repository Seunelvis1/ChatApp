import React, {useState} from 'react'
import seun from "../img/experiment.png";
import {useNaigate} from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { getDownloadURL, ref, getStorage, uploadBytesResumable } from 'firebase/storage';
import { async } from '@firebase/util';
import { db, setDoc } from 'firebase/firestore';

const Register = () => {
const [err, setErr] = useState(false); 

const navigate = useNavigate();
const handleSubmit = async (e)=>{
  e.preventDault()
  const displayName = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;
  const file = e.target[3].file[0];
console.log(displayName);
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const storageRef = ref(storage, displayName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      // "state_changed",
      // (snapshot) =>{
      //   const progress = (snapshot.bytesTranseferred / snapshot.totalBytes) * 100;
      //   console.log("upload is " + progress + "% done");

      // }
      (error) =>{
        setErr(true);
      },
      () =>{
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) =>{
          console.log("File avaialble at", downloadURL);
          await updateProfile(res.user{
            displayName,
            photoURL:downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "userChats", res.user.uid, {}));
          navigate("/");

        })
      }
    );
   
  }catch(err){
    setErr(true);
  }


}
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className='logo'>Elvis Chat</span>
    <span className='title'>Register</span>
        <form onSubmit={handleSubmit}> 
        <input type='text' placeholder='display name'/>
        <input type="email" placeholder="email"/>
        <input type='password' placeholder="password"/>
        <input style={{display: "none"}}type='file' id='file'/>
        <label htmlFor='file'>
          <img src={seun} alt=''/>
          <span>Add an avatar</span>
        </label>
        <button>Sign up</button>
        {err && <span>{err}</span>}
        </form>
        <p>You do have an account? Login</p>
    </div>
    </div>
  )
}

export default Register