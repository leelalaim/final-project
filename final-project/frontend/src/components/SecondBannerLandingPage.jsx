import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import SecondBanner from "assets/joanna-kosinska-1_CMoFsPfso-unsplash.jpg";
import { Link } from "react-router-dom";

// import { Login } from "../components/Login";

const Container = styled.section`
  position: relative;
`;

const Banner = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 40vh;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 22%;
  left: 20%;
`;

const Text = styled.h1`
  display: flex;
  color: white;
  font-size: 35px;
  font-weight: 400;
  margin: 0;
  line-heigh: 35px;
  justify-content: flex-end;
  line-height: 35px;
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 80px;
    margin-bottom: -70px;
  }
`;

const LowerText = styled(Text)`
  display: flex;
  justify-content: flex-end;
  color: #f4e03f;
  font-size: 45px;
  margin: 0 0 0 10px;
`;

const BannerButton = styled(Link)`
  position: absolute;
  bottom: 30%;
  left: 50%;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 10px 30px;
  border-radius: 30px;
  background-color: rgba(72, 72, 72, 0.9);
  text-decoration: none;
`;

// const SignInButton = styled(Login)`
//   position: absolute;
//   bottom: 30%;
//   left: 50%;
//   // color: #ffffff;
//   // border: 1px solid #ffffff;
//   // padding: 10px 30px;
//   // border-radius: 30px;
//   // background-color: rgba(72, 72, 72, 0.9);
// `;

export const SecondBannerLandingPage = () => {
  let content;

  let emailRedux = useSelector((store) => store.user.email);

  if (emailRedux === null) {
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
        <BannerButton to="/upload">Upload</BannerButton>
      </Container>
    );
  }

  return <>{content}</>;
};
