import requests

# Define the base URL of your server
base_url = "http://localhost:3001"

# Sample data for POST request
sample_resume = {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "address": "123 Main St, City, Country",
    "education": ["Bachelor's Degree in Computer Science"],
    "experience": ["Software Engineer (5 years)"],
    "skills": ["Python", "JavaScript", "HTML", "CSS"],
    "projects": [
        {"name": "Project 1", "description": "Description of Project 1"},
        {"name": "Project 2", "description": "Description of Project 2"}
    ],
    "languages": ["English", "French"],
    "hobbies": ["Reading", "Traveling"]
}

# Send a GET request to fetch resume data
def fetch_resume():
    url = base_url + "/resume/fetch"
    response = requests.get(url)
    print("GET /resume/fetch")
    print("Response:", response.status_code)
    print("Content:", response.json())
    print()

# Send a POST request to add resume data
def add_resume(resume_data):
    url = base_url + "/resume/add"
    response = requests.post(url, json=resume_data)
    print("POST /resume/add")
    print("Request:", resume_data)
    print("Response:", response.status_code)
    print("Content:", response.json())
    print()

if __name__ == "__main__":
    
    # Test adding new resume data
    add_resume(sample_resume)

