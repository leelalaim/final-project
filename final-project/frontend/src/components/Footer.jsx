import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
  height: 150px;
  background-color: #D7D6D6;
  position: fixed;
  bottom: 0;
`

const FooterText = styled.h3`
font-size: 14px;
  font-weight: 400;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Some info here</FooterText>
            <FooterText>More info here</FooterText>
        </FooterContainer>
    )
}