
import Candidat from "../models/Candidat.js";
import OpenAI from "openai";




export const addCandidat = async (req, res, next) => {
  const newCandidat = new Candidat({ userId: req.user.id, ...req.body });
  try {
    const savedCandidat = await newCandidat.save();
    res.status(200).json(savedCandidat);
  } catch (err) {
    next(err);
  }
};



export const getCandidats = async (req, res, next) => {
  try {
    const candidat = await Candidat.find();
    res.status(200).json(candidat);
  } catch (err) {
    next(err);
  }
};


export const search = async (req, res, next) => {
  const query = req.query.q;

  try {
    /*
    const openai = new OpenAI();
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Tu es un assistant intelligent de recrutement. Je souhaite te donner une description du profil que je cherche et je veux que tu transformes la description en format JSON avec les champs suivants : Education.Formation, Education.Etablissement, Certificats, Année d'expérience, Métier, Compétences, Langues, Experience.Poste, Experience.Employeur. Si l'un des champs n'est pas spécifié, laissez-le vide."
        },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
    });
  
    const profil = JSON.parse(completion.choices[0].message.content);
    */

    var profil = {
      "Education": {
        "Formation": "",
        "Etablissement": "INPT"
      },
      "Certificats": [],
      "Année d'expérience": 7,
      "Métier": "",
      "Compétences": [],
      "Langues": [],
      "Experience": {
        "Poste": "",
        "Employeur": ""
      }
    }

    console.log(profil);

    let listeProfils = {};

    for (const [key, value] of Object.entries(profil)) {
      if (value && (typeof value !== 'object' || (Array.isArray(value) && value.length) || (Object.keys(value).length))) {
        let formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim();

        if (typeof value === "object" && !Array.isArray(value)) {
          for (const [subKey, subValue] of Object.entries(value)) {
            if (subValue) {
              listeProfils[`${formattedKey}.${subKey.charAt(0).toUpperCase() + subKey.slice(1)}`] = subValue;
            }
          }
        } else {
          if (key === "Compétences" || key === "Langues") {
            listeProfils[key] = { $all: value };
          } else if (key === "Année d'expérience") {
            listeProfils["AnneeExperience"] = { $gte: value };
          } else {
            listeProfils[formattedKey] = value;
          }
        }
      }
    }

    console.log(listeProfils);

    const candidats = await Candidat.find(listeProfils);

    res.status(200).json(candidats);
  } catch (error) {
    next(error);
  }
};