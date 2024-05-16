const e = require("express");
const mongoose = require("mongoose");

const ResumeSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, "Pas de cv sans nom"]
        },
        email : {
            type : String,
            required : [true, "Pas de cv sans email"]
        },
        phone : {
            type : Number,
            required : [true, "Pas de cv sans numero de telephone"]
        },
        address : {
            type : String,
            required : [true, "Pas de cv sans adresse"]
        },
        education : {
            type : [String],
            required : [true, "Pas de cv sans education"]
        },
        experience : {
            type : [String],
            required : [true, "Pas de cv sans experience"]
        },
        skills : {
            type : [String],
            required : [true, "Pas de cv sans skills"]
        },
        projects: {
            type: [{
                name: String,
                description: String
            }],
            required: [true, "Pas de cv sans projects"]},
            
        languages : {
            type : [String],
            required : [true, "Pas de cv sans languages"]
        },
        hobbies : {
            type : [String],
            required : [true, "Pas de cv sans hobbies"]
        },
        
    }
);



const Resume = mongoose.model("Resume", ResumeSchema);
module.exports = {Resume};



