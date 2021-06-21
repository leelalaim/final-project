import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import SecondBanner from "assets/joanna-kosinska-1_CMoFsPfso-unsplash.jpg";
import { Link } from "react-router-dom";

import { BannerButton } from './BannerButton'

// import { Login } from "../components/Login";

const Container = styled.section`
  position: relative;
`;

const Banner = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 35vh;
  @media (min-width: 768px) {
    height: 25vh;
    object-position: 50% 20%;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 22%;
  right: 10%;
  @media (min-width: 768px) {
    top: 22%;
    right: 20%;
  }
`;

const Text = styled.h1`
  display: flex;
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
  
`;

const LowerText = styled(Text)`
  display: flex;
  justify-content: flex-end;
  color: #f4e03f;
  font-size: 40px;
  margin: 0 0 0 10px;
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
 
`;

const BannerButtonUpload = styled(BannerButton)`
bottom: 15%;
left: 30%;
`
// const SignInButton = styled(Login)`
//   position: absolute;
//   bottom: 30%;
//   left: 50%;
// `;

export const SecondBannerLandingPage = () => {
  let content;

  const emailRedux = useSelector((store) => store.users.user && store.users.user.email);
  if (!emailRedux) {
    content = (
      <Container>
        <Banner src={SecondBanner} />
        <TextContainer>
          <Text>Want to share</Text>
          <LowerText>your project?</LowerText>
        </TextContainer>
        <BannerButton to="/signup">Sign Up</BannerButton>
      </Container>
    );
  } else {
    content = (
      <Container>
        <Banner src={SecondBanner} />
        <TextContainer>
          <Text>Want to share</Text>
          <LowerText>your project?</LowerText>
        </TextContainer>
        <BannerButton />
      </Container>
    );
  }

  return <>{content}</>;
};
