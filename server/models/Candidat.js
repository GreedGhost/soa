import mongoose from "mongoose";

const CandidatSchema = new mongoose.Schema(
  {
    Nom: {
      type: String,
      required: true,
    },
    Prenom: {
      type: String,
      required: true,
    },
    Profile: {
      type: String,
      required: true,
    },
    Education: {
      Formation: {
        type: String,
        required: true,
      },
      Etablissement: {
        type: String,
        required: true,
      },
    },
    Certificats: {
      type: [String],
      required: true,
    },
    AnneeExperience: {
      type: Number,
      required: true,
    },
    Métier: {
      type: String,
      required: true,
    },
    Compétences: {
      type: [String],
      required: true,
    },
    Langues: {
      type: [String],
      required: true,
    },
    Experience: {
      Poste: {
        type: String,
        required: true,
      },
      Employeur: {
        type: String,
        required: true,
      },
    },
    imgUrl: {
      type: String,
      required: true,
    },
    cvUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Candidat", CandidatSchema);

