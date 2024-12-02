import React from 'react';
import styles from './DataInput.module.css';

const DataInputSection = () => {
  return (
    <section id="data-input" className={styles.dataInput}>
      <h2 className={styles.title}>Upload Data</h2>

      
      <div className={styles.uploadOption}>
        <h3>Option 1: Upload a Microbiome File</h3>
        <form id="file-upload-form" encType="multipart/form-data">
          <label htmlFor="data-file">Choose File:</label>
          <input
            type="file"
            id="data-file"
            name="data-file"
            accept=".csv, .txt"
          />
          <button type="submit" className={styles.btn}>Upload File</button>
        </form>
      </div>


      <div className={styles.uploadOption}>
        <h3>Option 2: Enter Metadata</h3>
        <form id="metadata-upload-form">
          <label htmlFor="metadata">Enter Metadata:</label>
          <textarea
            id="metadata"
            name="metadata"
            placeholder="Enter metadata..."
          ></textarea>
          <button type="submit" className={styles.btn}>Submit Metadata</button>
        </form>
      </div>
    </section>
  );
};

export default DataInputSection;
