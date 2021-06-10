import React from 'react'
import styled from "styled-components/macro";
import SecondBanner from 'assets/joanna-kosinska-1_CMoFsPfso-unsplash.jpg'

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
  top: 10%;
  left: 15%;
`;

const Text = styled.h1`
  color: white;
  font-size: 50px;
  margin-bottom: -50px;
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 80px;
    margin-bottom: -70px;
  }
`;

const LowerText = styled(Text)`
  color: #f4e03f;
`;

export const SecondBannerLandingPage = () => {
  return (
    <Container>
      <Banner src={SecondBanner} />
      <TextContainer>
        <Text>Want to share</Text>
        <LowerText>your project?</LowerText>
      </TextContainer>
    </Container>
  )
}
