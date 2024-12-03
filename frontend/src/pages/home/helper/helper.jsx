import React, { useState } from "react";
import styles from "./DataInput.module.css";
import axios from "axios";
import AboutUs from "./about";
import Feedback from "./feed_back/send_back";

const DataInputSection = () => {
  const [selected_file, setSelected_file] = useState(null);
  const [predicted_class, setPredicted_class] = useState("");
  const [prediction_image, setprediction_image] = useState("");
  const [propability, setpropability] = useState([]);
  const [values, setValues] = useState();
  const [metadata, setMetadata] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!selected_file || !metadata) {
      alert("Please select a file and enter metadata.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selected_file);
    formData.append("metadata", metadata); // Include metadata in the form data

    try {
      const response = await axios.post(
        "http://13.203.112.187:5000/prediction",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setValues(response.data);
      setPredicted_class(response.data.predicted_class);
      const base64Image = response.data.prediction_image;
      setprediction_image(`data:image/png;base64,${base64Image}`);
      setpropability(response.data.probabilities);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <div id="data-input" className={styles.dataInput}>
    {!values && (
        <>
        
            <h2 className={styles.title}>Check your Stats</h2>
      
            <div className={styles.uploadOption}>
              <h3>Upload a Microbiome File and Enter Metadata</h3>
              <form
                id="file-metadata-upload-form"
                encType="multipart/form-data"
                onSubmit={handleFormSubmit} // Submit the form with both file and metadata
              >
                <label htmlFor="data-file">Choose File:</label>
                <input
                  type="file"
                  id="data-file"
                  name="data-file"
                  onChange={(e) => setSelected_file(e.target.files[0])}
                />
      
                <label htmlFor="metadata">Enter Metadata:</label>
                <textarea
                  id="metadata"
                  name="metadata"
                  placeholder="Enter metadata..."
                  onChange={(e) => setMetadata(e.target.value)}
                ></textarea>
      
                <button type="submit" className={styles.btn}>
                  Submit Data
                </button>
              </form>
            </div>
         
        </>
      )}
   


      {values && (
        <>
<div className={styles.result}>
        <h1 style={{color:'white'}}>YOUR RESULT </h1>
          <h2 style={{color:'white'}}>{predicted_class}</h2>
          <img
            src={prediction_image}
            style={{ width: "500px", height: "300px" }}
            alt="Prediction"
          />
          <ul>
            {propability.map((value, key) => {
              return <li key={key} style={{color:'white'}}>{value}</li>;
            })}
          </ul>
<a href={prediction_image} download="result.png"  style={{
          display: 'inline-block',
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>  Download Result</a>

          </div>
        </>
      )}

<AboutUs/>
<Feedback/>
   </div>  

</>
  );
};

export default DataInputSection;
