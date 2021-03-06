// Outer Dependencies
import React from "react";
import styled from "styled-components/macro";

//Styled Components
const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 50px;
  bottom: 0;
  background: rgba(99, 98, 98, 0.5);
  margin-top: -5px;
`;

const FooterText = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

//Component
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Created by:{" "}
        <Link href="https://www.linkedin.com/in/malin-vannesjö-57aa9051/">
          Malin
        </Link>
        ,{" "}
        <Link href="https://www.linkedin.com/in/hannah-jesinkey/">Hannah</Link>{" "}
        & <Link href="https://www.linkedin.com/in/laimaduhovnaja/">Laima</Link>
      </FooterText>
    </FooterContainer>
  );
};
