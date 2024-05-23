import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #F5F4EF;
`;
const Search = () => {
  const [candidats, setCandidats] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchCandidats = async () => {
      try {
        // Effectuer une requête GET avec les critères de recherche dans la query string
        const res = await axios.get(`http://localhost:8800/api/candidats/search${query}`);
        setCandidats(res.data);
      } catch (erreur) {
        console.error("Erreur lors de la récupération des candidats :", erreur);
      }
    };
    fetchCandidats();
  }, [query]);

  return (
    <Container>
      {candidats.map(candidat => (
        <Card key={candidat._id} candidat={candidat} />
      ))}
    </Container>
  );
};

export default Search;
