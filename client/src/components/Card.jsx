import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  width: ${(props) => (props.type !== "sm" ? "100%" : "100%")};
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #999;
  margin-right: 10px;
  display: ${(props) => props.type === "sm" && "none"};
`;

const NamesContainer = styled.div`
  display: flex;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #000000;
  margin-top: 12px;
  margin-right: 10px;
`;

const Description = styled.p`
  font-size: 13px;
  color: #000000;
  margin-top: 10px;
`;

const DownloadLink = styled.a`
  color: #007bff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 50px;
`;

const Card = ({ candidat }) => {
  const [imageData, setImageData] = useState(""); // State to hold the encoded image data
  const [imageError, setImageError] = useState(null); // State to hold error information
  
  const encodeImageData = async (imageUrl) => {
    try {
      console.log("Fetching image from:", imageUrl);
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`Error fetching image: ${response.statusText}`);
      }
      console.log("Image fetched successfully");
      const blob = await response.blob();
      console.log("Encoding image...");
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target.result;
        const imageDataUrl = `data:image/png;base64,${base64String.split(",")[1]}`; // Encode as PNG regardless of the original format
        setImageData(imageDataUrl); // Set the encoded image data
        console.log("Image encoded successfully:", imageDataUrl);
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      setImageError(error);
      console.error("Error retrieving or encoding image:", error);
    }
  };
  

  useEffect(() => {
    const imageUrl = candidat.imgUrl;
    encodeImageData(imageUrl); // Encode the image data on component mount using initial URL
  }, []);

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = candidat.cvUrl;
    downloadLink.download = candidat.cvName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <CardContainer>
      <Details>
        <NamesContainer>
          <Image src={imageData} alt="Candidate Image" />
          <Name>{candidat.LastName}</Name>
          <Name>{candidat.FirstName}</Name>
        </NamesContainer>
        <Description>{candidat.Profile}</Description>
      </Details>
      <DownloadLink onClick={handleDownload}>
        <FontAwesomeIcon icon={faDownload} />
        Télécharger le CV
      </DownloadLink>
    </CardContainer>
  );
};

export default Card;
