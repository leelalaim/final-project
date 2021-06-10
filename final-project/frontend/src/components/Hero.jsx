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
  top: 30%;
`;

const BannerHeader = styled.h1`
  margin: 0;
  padding: 10px 0px 10px 30px;
  font-weight: 400;
  color: #ffffff;
  background-color:rgba(0, 0, 0, 0.3);
  font-size: 40px;
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 70px;
  }
`

const BannerParagraph = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin: 5% 0 0 5%;
  line-height: 35px;
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
  }
`

export const Hero = () => {
return (
    <BannerContainer>
    <BannerImage src={heroImage}></BannerImage>
    <TextContainer>
      <BannerHeader>Creativity starts here...</BannerHeader>
      <BannerParagraph>Bootcamp projects worth seeing. <br/>And some more text</BannerParagraph>
    </TextContainer>
  </BannerContainer>
)
}