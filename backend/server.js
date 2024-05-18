const mongoose = require('mongoose');
const express = require('express');
const { Resume } = require('./Model');
const cors = require('cors');
const bodyParser = require("body-parser");
const axios = require('axios');

const uri = "mongodb+srv://abousmohamed2002:1234@projetcv.q0iupl2.mongodb.net/?retryWrites=true&w=majority&appName=projetCv";

const app = express();
const port = 3001;


app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));


app.get("/resume/fetch", async (req, res) => {
    try {
        const resume_ = await Resume.find({});
        
        resume = resume_[resume_.length - 1];
        if (!resume) {
            res.status(404).send("No resume found.");
            return;
        }
        
        // Generate HTML response
        let htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Resume</title>
            </head>
            <body>
                <h1>Resume</h1>
                <p><strong>Name:</strong> ${resume.name}</p>
                <p><strong>Email:</strong> ${resume.email}</p>
                <p><strong>Phone:</strong> ${resume.phone}</p>
                <p><strong>Address:</strong> ${resume.address}</p>
                <p><strong>Education:</strong> ${resume.education.join(", ")}</p>
                <p><strong>Experience:</strong> ${resume.experience.join(", ")}</p>
                <p><strong>Skills:</strong> ${resume.skills.join(", ")}</p>
                <p><strong>Languages:</strong> ${resume.languages.join(", ")}</p>
                <p><strong>Hobbies:</strong> ${resume.hobbies.join(", ")}</p>
                <h2>Projects</h2>
                <ul>
        `;

        for (const project of resume.projects) {
            htmlResponse += `
                <li>
                    <strong>Name:</strong> ${project.name}<br>
                    <strong>Description:</strong> ${project.description}
                </li>
            `;
        }

        htmlResponse += `
                </ul>
            </body>
            </html>
        `;

        res.status(200).send(htmlResponse);
    } catch (error) {
        console.error("Error fetching resume:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/resume/add", async (req, res) => {
    const resume = req.body;

    // Map through projects and send each description to the Flask API for summarization
    const projectsWithSummarizedDescription = await Promise.all(req.body.projects.map(async (project) => {
        const summarizedDescription = await axios.post('http://localhost:5001/generate', { project: project.description });
        return {
            name: project.name,
            description: summarizedDescription.data  // Assuming the summarized description is in the response data
        };
    }));

    // Assign the projects with summarized descriptions back to the request body
    req.body.projects = projectsWithSummarizedDescription;

    // Save the new resume to the database
    const newResume = new Resume(req.body);
    await newResume.save();

    // Respond with the new resume
    res.status(200).json(newResume);
});




mongoose
  .connect(uri)
  .then (() => {
    app.listen(port, () => {
      console.log("Le serveur il tourne bien");
    })
  }
  )
  .catch((err) => console.log(err));