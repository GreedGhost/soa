import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #F5F4EF;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 50px;
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 50px;
  color: red;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [candidats, setCandidats] = useState([]);

  useEffect(() => {
    const fetchCandidats = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/candidats/getCandidats`);
        console.log('Données récupérées avec succès:', res.data); // Afficher les données dans la console
        setCandidats(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des candidats:', error);
        setError(true);
        setLoading(false);
      }
    };
    fetchCandidats();
  }, []);

  return (
    <Container>
      {loading && <LoadingMessage>Chargement en cours...</LoadingMessage>}
      {error && <ErrorMessage>Une erreur s'est produite lors du chargement des données.</ErrorMessage>}
      {!loading && !error && candidats.map((candidat) => (
        <Card key={candidat._id} candidat={candidat}/>
      ))}
    </Container>
  );
};

export default Home;
