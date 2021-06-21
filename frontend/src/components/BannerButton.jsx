import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  position: absolute;
  bottom: 15%;
  left: 50%;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 10px 30px;
  border-radius: 30px;
  background-color: rgba(72, 72, 72, 0.9);
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  @media (min-width: 375px) {
    font-size: 20px;
  }
`;

export const BannerButton = () => {
  return <Button to="/upload">Upload</Button>
}

