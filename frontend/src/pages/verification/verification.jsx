import React, { useState } from 'react';
import axios from 'axios';
import styles from './password.module.css';

const PasswordRecovery = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const sendVerificationCode = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/recovery', { email, username });
      if (response.status === 200) {
        setIsCodeSent(true);
        setStep(2);
        setMessage('Verification code sent to your email!');
      }
    } catch (error) {
      setMessage('Error sending verification code.');
    }
  };

  const verifyCode = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/verify-code', { email, code: verificationCode });
      if (response.status === 200) {
        setStep(3);
        setMessage('Code verified. Now, enter your new password.');
      } else {
        setMessage('Invalid verification code. Please try again.');
      }
    } catch (error) {
      setMessage('Error verifying code.');
    }
  };

  const updatePassword = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/update-password', { email, password: newPassword });
      if (response.status === 200) {
        setMessage('Password updated successfully!');
      } else {
        setMessage('Error updating password.');
      }
    } catch (error) {
      setMessage('Error updating password.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Password Recovery</h2>
      {message && <p className={styles.message}>{message}</p>}

      {step === 1 && (
        <div>
          <h3>Step 1: Enter your email and username</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button onClick={sendVerificationCode}>Send Verification Code</button>
        </div>
      )}

      {step === 2 && isCodeSent && (
        <div>
          <h3>Step 2: Enter the verification code sent to your email</h3>
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <button onClick={verifyCode}>Verify Code</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Step 3: Enter your new password</h3>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button onClick={updatePassword}>Update Password</button>
        </div>
      )}
    </div>
  );
};

export default PasswordRecovery;
