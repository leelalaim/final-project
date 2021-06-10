import React from "react";
import styled from "styled-components/macro";

import heroImage from 'final-project/frontend/src/assets/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg'

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const BannerImage = styled.img`
  object-fit: cover;
  height: 400px;
`

const BannerHeader = styled.h1`
  margin: 0;
  padding: 10px 0px 10px 30px;
  position: absolute;
  font-weight: 400;
  top: 100px;
  color: #ffffff;
  background-color:rgba(0, 0, 0, 0.3);
  font-size: 40px;
`

const BannerParagraph = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin: 0;
  position: absolute;
  left: 30px;
  top: 220px;
  line-height: 35px;
`

export const ProjectsBanner = () => {
return (
    <BannerContainer>
    <BannerImage src={heroImage}></BannerImage>
    <BannerHeader>Creativity starts here...</BannerHeader>
    <BannerParagraph>Bootcamp projects worth seeing. <br/>And some more text</BannerParagraph>
  </BannerContainer>
)
}