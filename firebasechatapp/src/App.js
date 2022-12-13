import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import './style.scss';

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/Register" element={<Register/>}/>

</Routes>
    </BrowserRouter>
    
  );
}

export default App;
