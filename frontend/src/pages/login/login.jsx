import React, { useState } from 'react';
import axios from 'axios';
import styles from './login.module.css';  // Import the CSS module
import { Link, useNavigate } from 'react-router-dom';
import UnauthorizedError from '../error/custom_error';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const[error,setError]=useState(false)
  const[username,setusername]=useState('');
    const navigate=useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        email,
        password,
        username
      });

      if(response.status==200){

navigate('/home')
      }
    
    } catch (error) {
        setError(true)
      console.log(error, 'error');
    }
  };

  return (
    <>
{!error &&(

    <div className={styles.signupContainer}>
    <h2 className={styles.signupHeading}>Login</h2>
    <form className={styles.signupForm} id="sign-up-form" onSubmit={handleLogin}>
      

      <div className={styles.inputGroup}>
        <label htmlFor="username">user Name</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your user name"
          required
          onChange={(e) => setusername(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

    

      <button type="submit" className={styles.signupButton}>
        Login
      </button>
    </form>
  <h3>Don't have a account</h3>

  <Link to="/signup">Sign Up</Link>
  <h3>or <button class={styles.forget_password_button}>Forget Password</button></h3>
  </div>
)}
   

    {error &&(
        <UnauthorizedError/>
    )}

  

</>

  );
}

export default Login;
