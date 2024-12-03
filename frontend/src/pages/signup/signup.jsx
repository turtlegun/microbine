import React, { useState } from 'react';
import axios from 'axios';
import styles from './style.module.css';  // Import the CSS module
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dob, setDob] = useState('');
  const[username,setusername]=useState('');
    const naviagate=useNavigate()
    
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://13.203.112.187:5000/signup', {
        email,
        password,
        firstname,lastname,dob,username
      });

      if(response.status==200){
        naviagate('/')
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupHeading}>Sign Up</h2>
      <form className={styles.signupForm} id="sign-up-form" onSubmit={handleSignUp}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter your first name"
            required
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

      


        <div className={styles.inputGroup}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter your last name"
            required
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

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

        <div className={styles.inputGroup}>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            required
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.signupButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
