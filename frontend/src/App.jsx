
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./profile/profile";


function App() {


  return (
    <>
 <Router>
<Routes>

<Route index element={<Login/>}  />
<Route path="/signup" element={<SignUp/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/profile" element={<Profile/>}/>
</Routes>

 </Router>
    </>
  )
}

export default App
