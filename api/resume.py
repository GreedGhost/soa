from flask import Flask, request
import google.generativeai as genai
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Set up your API key (replace with placeholder) - Load securely from environment variable
YOUR_API_KEY = "AIzaSyC9IRFDPWox5njaNIzBsQAtw4HNv6rGujY"
genai.configure(api_key=YOUR_API_KEY)

# Choose the Gemini model (e.g., "gemini-pro")
model_name = "gemini-pro"
model = genai.GenerativeModel(model_name)

@app.route("/generate_project", methods=["POST"])
def generate_project():
  """
  API endpoint to generate response using Gemini based on prompt.
  """
  # Get prompt text from request data
  project = request.json.get("project")

  if project is None:
    return "Missing prompt in request body", 400

  # Generate response using the model
  response = model.generate_content("Summarize this in one line for my resume: "+ project)

  # Return the generated text
  return response.text

@app.route("/generate_education", methods=["POST"])
def generate_education():
  """
  API endpoint to generate response using Gemini based on prompt.
  """
  # Get prompt text from request data
  project = request.json.get("project")

  if project is None:
    return "Missing prompt in request body", 400

  # Generate response using the model
  response = model.generate_content("Summarize this in one line for my resume: "+ project)

  # Return the generated text
  return response.text



if __name__ == "__main__":
  # Load API key securely from environment variable (recommended)
  if YOUR_API_KEY is None:
    raise ValueError("Missing GEMINI_API_KEY environment variable")

  # Run the Flask development server
  app.run(debug=True, port=5001)
