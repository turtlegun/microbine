from flask import Blueprint, request, jsonify
from database import database_initiziation
import pandas as pd
import joblib
import matplotlib.pyplot as plt
import io
import base64

prediction = Blueprint('prediction', __name__)

model = joblib.load('./prediciton.pkl') 

@prediction.route('/prediction', methods=['POST'])
def prediciton_route():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file part"}), 400
        
        
        file = request.files['file']
        new_data = pd.read_excel(file, engine='openpyxl') 
        

        X_columns = model.feature_names_in_ 
        new_data_pivot = pd.DataFrame(0, index=[0], columns=X_columns)
        
 
        for _, row in new_data.iterrows():
            bacterium = row['Bacteria']
            if bacterium in new_data_pivot.columns:
                new_data_pivot.at[0, bacterium] = row['Increased/decreased']
        
  
        probabilities = model.predict_proba(new_data_pivot)
        predicted_class = model.predict(new_data_pivot)
        
        disease_labels = model.classes_
        plt.figure(figsize=(10, 6))
        plt.bar(disease_labels, probabilities[0], color='skyblue')
        plt.title(f"Prediction Confidence for {predicted_class[0]}")
        plt.xlabel("Diseases")
        plt.ylabel("Probability")
        plt.ylim(0, 1)
        plt.xticks(rotation=45)
        plt.grid(axis='y', linestyle='--', alpha=0.7)
        

        img_io = io.BytesIO()
        plt.savefig(img_io, format='png')
        img_io.seek(0)
        img_base64 = base64.b64encode(img_io.getvalue()).decode('utf-8')
        response = {
            "predicted_class": predicted_class[0],
            "probabilities": probabilities[0].tolist() ,
             "prediction_image": img_base64 
        }
        print("file sented")
        return jsonify(response), 200
        

       
    except Exception as e:

        print(str(e))
        return jsonify("something went wrong", str(e)), 404
