import React, { lazy, useState } from "react";

const Common = lazy(() => import("../common/common"));
import style from "./style.module.css";

import axios from "axios";
import Error from "../common/error";
import { useNavigate } from "react-router";

interface formdata {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [Formdata, setFormdata] = useState<formdata>({
    username: "",
    password: "",
  });
  const navigate=useNavigate()
  const [serverError, setServerError] = useState<string>("");

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/login",
        Formdata
      );

      if(response.status===200){
        navigate('/')
      }
    } catch (error: any) {
      console.log(error);
      if(error.response.status===404){
        setServerError(error.response.data.message)
      }
    }
  };
  return (
    <>
      <Common />

      <form
        className={`w-[27.78vw] h-[48.83vh] top-[25.55vh] left-[36.11vw] absolute bg-[#F4F5F9] 
            flex justify-center items-center flex-col gap-5

            `}
        onSubmit={handlesubmit}
        method="POST"
      >
        <h3 className={`text-[1.37vw] text-[#161515] ${style.signup_header}`}>
          Login
        </h3>

        <input
          type="text"
          className={`${style.input}`}
          placeholder="Username"
          name="username"
          value={Formdata.username}
          onChange={(e) => {
            handlechange(e);
          }}
          required
        />

        <input
          type="password"
          className={`${style.input}`}
          placeholder="Password"
          name="password"
          value={Formdata.password}
          onChange={(e) => {
            handlechange(e);
          }}
          required
        />

        <button
          className={`w-[22.22vw] h-[4.41vh]  bg-[#0E78BA] ${style.submit_button} text-[#F4F5F9]`}
          type="submit"
        >
          Login
        </button>
        <h5>Don't have account </h5>
        <button
          className={`w-[22.22vw] h-[4.41vh]  bg-[#F4F5F9] ${style.submit_button} border-[#161515] 
border-[1px] text-[#161515]`}
onClick={()=>navigate('/signup')}
        >
          Sign Up
        </button>
      </form>
      {serverError && (
        <Error message={serverError} setServerError={setServerError} />
      )}
    </>
  );
};
export default Login;
