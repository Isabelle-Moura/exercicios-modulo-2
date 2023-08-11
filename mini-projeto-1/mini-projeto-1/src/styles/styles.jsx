import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #6950a1;
  padding: 2rem;
  width: 1279px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleHeader = styled.span`
  font-size: 30px;
  color: #ece9f3;
`;

export const PageTitle = styled.span`
  font-size: 40px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 5px 15px;
`;

export const CartCounter = styled.span`
  background-color: #6950a1;
  color: #ece9f3;
  padding: 5px 15px;
  border-radius: 10px;
`;

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const GameContainerPage2 = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 200px;
`

export const GameCard = styled.div`
  width: 30%;
  text-align: center;
  margin: 10px;
`;

export const GameImage = styled.img`
  max-width: 200px;
  height: auto;
`;

export const NextButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: #6950a1;
  color: #ece9f3;
  font-family: "Poppins";
  font-size: 20px;
  margin: 15px 5px 15px 80%;
  border-radius: 10px;
  cursor: pointer;
`;

export const FooterImages = styled.img`
  margin-left: 200px;
`;

export const Footeri = styled.footer`
  border: 3px solid #6950a1;
  height: 100px;
`;
