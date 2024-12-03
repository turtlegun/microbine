import React, { useEffect, useState } from 'react';
import { getdata } from './get_data';
import styles from './style.module.css';  // Import the CSS module

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const data = getdata();
    setUserData(data);
  }, []);

  return (
    <div className={styles.profileContainer}>
      {userData && (
        <div className={styles.profileCard}>
          <p className={styles.profileItem}>
            <span className={styles.strongText}>First Name:</span> {userData.firstname}
          </p>
          <p className={styles.profileItem}>
            <span className={styles.strongText}>Last Name:</span> {userData.lastname}
          </p>
          <p className={styles.profileItem}>
            <span className={styles.strongText}>Email:</span> {userData.email}
          </p>
          <p className={styles.profileItem}>
            <span className={styles.strongText}>Date of Birth:</span> {userData.dob}
          </p>
          <p className={styles.profileItem}>
            <span className={styles.strongText}>Username:</span> {userData.username}
          </p>
          <p className={styles.profileItem}>
            <span className={styles.strongText}>Password:</span> {userData.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
