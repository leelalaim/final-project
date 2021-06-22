import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import devGallery from "assets/dev-gallery.png";
import { Link } from "react-router-dom";


const Container = styled.section`
  position: relative;
`;

const Banner = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 40vh;
  @media (min-width: 768px) {
    height: 45vh;
  }
  @media (min-width: 1440px) {
    height: 50vh;
  } 
  @media (min-width: 1500px) {
    height: 30vh;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 29%;
  left: 10%;
  @media (min-width: 375px) {
    top: 32%;
    left: 10%;
  }
  @media (min-width: 768px) {
    top: 20%;
    left: 20%;
  }
  @media (min-width: 1440px) {
    top: 20%;
    left: 25%;
  }
`;

const Text = styled.h1`
  margin-bottom: 30px;
  display: flex;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  line-height: 23px;
  justify-content: flex-end;
  @media (min-width: 375px) {
    font-size: 27px;
    line-height: 30px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 33px;
  }
  @media (min-width: 1440px) {
    font-size: 60px;
    line-height: 63px;
  }
`;

const LowerText = styled(Text)`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  color: #f4e03f;
  font-size: 30px;
  font-weight: 500;
  @media (min-width: 375px) {
    font-size: 35px;
  }
  @media (min-width: 768px) {
    font-size: 55px;
    line-height: 57px;
  }
  @media (min-width: 1440px) {
    font-size: 77px;
    line-height: 77px;
  }
`;

const BannerButton = styled(Link)`
  // position: absolute;
  bottom: 30%;
  left: 33%;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 5px 20px;
  border-radius: 30px;
  background-color: rgba(72, 72, 72, 0.9);
  text-decoration: none;
  font-size: 15px;
  @media (min-width: 375px) {
    font-size: 17px;
    left: 30%;
    bottom: 20%;
    padding: 10px 30px;
    font-weight: 600;
  }
  @media (min-width: 768px) {
    font-size: 23px;
    left: 40%;
    bottom: 15%;
  }
  @media (min-width: 1440px) {
    width: 30%;
    font-size: 30px;
    left: 40%;
    bottom: 2%;
    padding: 10px 40px;
  }
`;

export const ProjectsSecondBanner = () => {
  let content;
  const emailRedux = useSelector((store) => store.users.user && store.users.user.email);
  if (!emailRedux) {
    content = (
      <Container>
        <Banner src={devGallery} />
        <TextContainer>
          <Text>Want to share</Text>
          <LowerText>your project?</LowerText>
          <BannerButton to="/signup">Sign Up</BannerButton>
        </TextContainer>
        
      </Container>
    );
  } else {
    content = (
      <Container>
        <Banner src={devGallery} />
        <TextContainer>
          <Text>Want to share</Text>
          <LowerText>your project?</LowerText>
          <BannerButton to="/upload">Upload</BannerButton>
        </TextContainer>
        
      </Container>
    );
  }

  return <>{content}</>;
};
