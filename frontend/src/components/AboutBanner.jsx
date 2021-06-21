import React from "react";
import styled from "styled-components/macro";

import projectsimage from "../assets/projects2.jpg";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BannerImage = styled.img`
  object-fit: cover;
  height: 60vh;
`;

const BannerHeader = styled.h1`
margin: 0;
padding: 10px 0px 10px 30px;
position: absolute;
font-weight: 400;
top: 30%;
color: #ffffff;
background-color: rgba(0, 0, 0, 0.3);
font-size: 33px;
width: 90%;
@media (min-width: 375px) {
  font-size: 43px;
}
`;

// const BannerParagraph = styled.p`
// font-size: 20px;
// font-weight: 300;
// margin: 0;
// position: absolute;
// left: 30px;
// top: 50%;
// line-height: 25px;
// @media (min-width: 375px) {
//   top: 50%;
//   font-size: 25px;
//   line-height: 29px;
// }
// `;

//HELLO!!!

export const AboutBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={projectsimage}></BannerImage>
      <BannerHeader>About devGallery project</BannerHeader>
      {/* <BannerParagraph>
        Share your project <br/> with the world! <br/> And some more text here
      </BannerParagraph> */}
    </BannerContainer>
  );
};
