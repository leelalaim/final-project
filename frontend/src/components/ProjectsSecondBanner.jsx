import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import devGallery from "assets/dev-gallery.png";
import { Link } from "react-router-dom";

import { BannerButton } from './BannerButton'

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
  top: 29%;
  left: 18%;
  // border: 1px solid black;
  @media (min-width: 375px) {
    top: 32%;
    left: 15%;
  }
`;

const Text = styled.h1`
  display: flex;
  color: white;
  font-size: 25px;
  font-weight: 400;
  margin: 0;
  line-height: 30px;
  justify-content: flex-end;
  @media (min-width: 375px) {
    font-size: 35px;
    line-height: 35px;
  }
`;

const LowerText = styled(Text)`
  display: flex;
  justify-content: flex-end;
  color: #f4e03f;
  font-size: 40px;
  font-weight: 500;
  @media (min-width: 375px) {
    font-size: 45px;
  }
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
        </TextContainer>
        <BannerButton to="/signup">Sign Up</BannerButton>
      </Container>
    );
  } else {
    content = (
      <Container>
        <Banner src={devGallery} />
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
