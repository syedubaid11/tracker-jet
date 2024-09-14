from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows all origins. In production, configure this more strictly.

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Python backend!"})

@app.route('/api/submit', methods=['POST'])
def submit_data():
    data = request.json
    # Process the data here
    return jsonify({"status": "Data received", "data": data})

if __name__ == '__main__':
    app.run(debug=True)