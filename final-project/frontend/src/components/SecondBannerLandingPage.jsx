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
  top: 22%;
  left: 20%;
`;

const Text = styled.h1`
  display: flex;
  color: white;
  font-size: 35px;
  font-weight: 400;
  margin: 0;
  line-heigh:35px;
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

const UploadButton = styled.button`
position: absolute;
bottom: 30%;
left: 50%;
color: #ffffff;
border: 1px solid #ffffff;
padding: 10px 30px;
border-radius: 30px;
background-color: rgba(72, 72, 72, 0.9);
`

export const SecondBannerLandingPage = () => {
  return (
    <Container>
      <Banner src={SecondBanner} />
      <TextContainer>
        <Text>Want to share</Text>
        <LowerText>your project?</LowerText>
      </TextContainer>
      <UploadButton>Upload</UploadButton>
    </Container>
  )
}
