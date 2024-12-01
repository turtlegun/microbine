document.addEventListener('DOMContentLoaded', () => {
    const authSection = document.getElementById('auth');
    const dataInputSection = document.getElementById('data-input');
    const predictionSection = document.getElementById('prediction');

    // Handle login
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        authSection.style.display = 'none';
        dataInputSection.style.display = 'block';
    });

    // Handle file upload
    document.getElementById('file-upload-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const fileInput = document.getElementById('data-file');
        if (!fileInput.files.length) {
            alert('Please upload a file.');
            return;
        }

        const formData = new FormData();
        formData.append('data-file', fileInput.files[0]);

        try {
            const response = await fetch('http://127.0.0.1:5000/predict/file', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            if (result.prediction) {
                predictionSection.style.display = 'block';
                document.getElementById('results').innerHTML = `<h3>Prediction: ${result.prediction}</h3>`;
            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error connecting to server.');
        }
    });

    // Handle metadata submission
    document.getElementById('metadata-upload-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const metadata = document.getElementById('metadata').value;
        if (!metadata) {
            alert('Please enter metadata.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/predict/metadata', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ metadata })
            });

            const result = await response.json();
            if (result.prediction) {
                predictionSection.style.display = 'block';
                document.getElementById('results').innerHTML = `<h3>Prediction: ${result.prediction}</h3>`;
            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error connecting to server.');
        }
    });
});
