//Outer Dependencies
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

//Inner Dependencies
import SecondBanner from "assets/joanna-kosinska-1_CMoFsPfso-unsplash (1).jpg";

//Styled Components
const Container = styled.section`
  position: relative;
`;

const Banner = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 35vh;
  margin-top: 25px;
  @media (min-width: 768px) {
    height: 40vh;
    object-position: 50% 20%;
  }
  @media (min-width: 1280px) {
    height: 40vh;
    object-position: 60% 20%;
  }
  @media (min-width: 1440px) {
    height: 40vh;
    object-position: 50% 20%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 22%;
  right: 10%;
  height: auto;
  @media (min-width: 768px) {
    top: 22%;
    right: 20%;
  }
  @media (min-width: 1280px) {
    right: 32%;
  }
`;

const Text = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 400;
  margin: 0;
  justify-content: flex-end;
  line-height: 35px;
  @media (min-width: 375px) {
    line-height: 37px;
    font-size: 33px;
  }
  @media (min-width: 768px) {
    line-height: 45px;
    font-size: 45px;
  }
  @media (min-width: 1280px) {
    line-height: 60px;
    font-size: 60px;
  }
`;

const LowerText = styled(Text)`
  color: #f4e03f;
  font-size: 40px;
  margin: 0 0 20px 0;
  @media (min-width: 414px) {
    font-size: 45px;
  }
  @media (min-width: 375px) {
    font-size: 46px;
  }
  @media (min-width: 768px) {
    line-height: 50px;
    font-size: 60px;
  }
  @media (min-width: 1280px) {
    line-height: 75px;
    font-size: 80px;
  }
`;

const BannerButtonUpload = styled(Link)`
  display: inline;
  width: 30%;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 5px 20px;
  text-align: center;
  border-radius: 30px;
  background-color: rgba(72, 72, 72, 0.9);
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  @media (min-width: 375px) {
    font-size: 17px;
    left: 40%;
    bottom: 20%;
    padding: 10px 30px;
    font-weight: 500;
  }
  @media (min-width: 768px) {
    font-size: 23px;
    left: 50%;
    bottom: 15%;
  }
  @media (min-width: 1280px) {
    left: 75%;
    bottom: 37%;
    font-size: 35px;
    padding: 12px 27px;
    border-radius: 35px;
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: #575757;
    border: 1px solid #575757;
  }
`;

export const SecondBannerLandingPage = () => {
  let content;

  const emailRedux = useSelector(
    (store) => store.users.user && store.users.user.email
  );
  if (!emailRedux) {
    content = (
      <Container>
        <Banner src={SecondBanner} />
        <TextContainer>
          <Text>Want to share</Text>
          <LowerText>your project?</LowerText>
          <BannerButtonUpload to="/signup">Sign Up</BannerButtonUpload>
        </TextContainer>
      </Container>
    );
  } else {
    content = (
      <Container>
        <Banner src={SecondBanner} />
        <TextContainer>
          <Text>Want to share</Text>
          <LowerText>your project?</LowerText>
          <BannerButtonUpload to="/upload">Upload</BannerButtonUpload>
        </TextContainer>
      </Container>
    );
  }

  return <>{content}</>;
};
