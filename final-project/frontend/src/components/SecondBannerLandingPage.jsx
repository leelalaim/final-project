import React from 'react'
import styled from "styled-components/macro";
import SecondBanner from 'assets/joanna-kosinska-1_CMoFsPfso-unsplash.jpg'

const Banner = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 40vh;
`;

export const SecondBannerLandingPage = () => {
  return (
    <div>
      <Banner src={SecondBanner} />
    </div>
  )
}
