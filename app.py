from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import numpy as np
import tensorflow as tf

# Suppress TensorFlow warnings
import logging
logging.getLogger('tensorflow').setLevel(logging.ERROR)

app = Flask(__name__)
CORS(app)

# Load ML Model
model_path = 'model.h5'
model = tf.keras.models.load_model(model_path)

# Class labels mapping
class_labels = {0: "Type 2 Diabetes", 1: "Crohn's Disease", 2: "Ulcerative Colitis", 3: "Pediatric IBD"}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict/file', methods=['POST'])
def predict_file():
    try:
        file = request.files.get('data-file')
        if not file:
            return jsonify({"error": "No file uploaded."}), 400

        # Example: Reading the file content (if it's a CSV)
        file_content = file.read().decode('utf-8')
        print(f"Received file content: {file_content[:100]}...")  # Preview file content

        # Mock example: Create numerical input based on file content length
        input_array = np.array([[len(file_content)]], dtype=np.float32)  # Replace with preprocessing logic
        prediction = model.predict(input_array)
        predicted_class = np.argmax(prediction, axis=1)[0]
        result = class_labels[predicted_class]

        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/predict/metadata', methods=['POST'])
def predict_metadata():
    try:
        metadata = request.json.get('metadata')
        if not metadata:
            return jsonify({"error": "No metadata provided."}), 400

        # Mock example: Create numerical input based on metadata length
        input_array = np.array([[len(metadata)]], dtype=np.float32)  # Replace with preprocessing logic
        prediction = model.predict(input_array)
        predicted_class = np.argmax(prediction, axis=1)[0]
        result = class_labels[predicted_class]

        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
