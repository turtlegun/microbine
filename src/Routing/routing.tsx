import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";


const Home=lazy(()=>import('../pages/home/home'))
const SignUp = lazy(() => import("../pages/signUp/signUp"));
const Login=lazy(()=>import("../pages/loging/login"))
const Routing: React.FC = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading</div>}>
                  
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </Suspense>  
      </Router>
    </>
  );
};

export default Routing
