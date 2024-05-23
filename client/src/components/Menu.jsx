import React from "react";
import styled from "styled-components";
import LamaTube from "../img/icone.jpg";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #51829B;
  height: 100vh;
  color: #FFFFFF;
  font-size: 14px;
  position: sticky;
  width: 300px;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 10px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Img = styled.img`
  height: 50px;
  margin-right: 5px; /* Ajoutez une marge à droite pour séparer l'icône du texte */
`;

const RecInText = styled.span`
  font-size: 30px; /* Increased font size for "RecIn" */
  vertical-align: middle; /* Aligns vertically with adjacent elements */
  margin-left:5px
  color: #FFFFFF
  
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 1px solid ${({ theme }) => theme.soft};
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LamaTube} />
            <RecInText >TalentMatch</RecInText>
          </Logo>
        </Link>
        <Item>
          <HomeIcon/>
          Acceuil
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Offres d'emplois
        </Item>
        <Hr />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Item>
          <SettingsOutlinedIcon />
          Paramètres
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Signaler
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Aide
        </Item>
        <Item>
          <ExitToAppOutlinedIcon />
          Déconnexion
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
