import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./Pages/Home"
import './style.scss';
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext);

  console.log(currentUser);
const ProtectedRoute = ({children}) =>{
  if(!currentUser) {
  return <Navigate to='/login'/>;
  }
  return children
}

  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<ProtectedRoute>
    <Home/>
  </ProtectedRoute>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/Register" element={<Register/>}/>

</Routes>
    </BrowserRouter>
    
  );
}

export default App;
