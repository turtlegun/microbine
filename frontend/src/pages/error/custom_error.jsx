import React, { useState } from 'react';
import styles from './UnauthorizedError.module.css'; 
import { Link } from 'react-router-dom';
import PasswordRecovery from '../verification/verification';



const UnauthorizedError = () => {
 
const[recovery,setRecovery]=useState(false)
 
const handlerecovery=()=>{
    setRecovery(true)
}

  return (
    <>
    {!recovery &&(
        <div className={styles.errorContainer}>
        <h1 className={styles.errorTitle}>Incorrect Username And Password</h1>
        <p className={styles.errorMessage}>
          Sorry, Try  <Link to="/signup">Sign Up</Link>
  
          <h3>or <button className={styles.forget_password_button} onClick={handlerecovery}>Forget Password</button></h3>
        </p>
      
      </div>
    )}
    {recovery &&(
        <PasswordRecovery/>
    )}
 </>   
  );
};

export default UnauthorizedError;
