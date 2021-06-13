import React from "react";
import styled from "styled-components/macro";

import heroImage from '../assets/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg'

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const BannerImage = styled.img`
  object-fit: cover;
  height: 60vh;
`
const TextContainer = styled.div`
  position: absolute;
  top: 27%;
`;

const BannerHeader = styled.h1`
  font-weight: 500;
  color: #575757;
  font-size: 45px;
  margin: 0 0 10px 35px;
  letter-spacing: 2px;
  line-height: 40px;
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 70px;
  }
`

const BannerParagraph = styled.p`
  font-size: 25px;
  font-weight: 300;
  line-height: 35px;
  margin: 0 0 0 35px;
  letter-spacing: 3px;
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
  }
`

export const Hero = () => {
return (
    <BannerContainer>
    <BannerImage src={heroImage}></BannerImage>
    <TextContainer>
      <BannerHeader>Bootcamp <br/> projects</BannerHeader>
      <BannerParagraph>by amazing people</BannerParagraph>
    </TextContainer>
  </BannerContainer>
)
}