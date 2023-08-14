import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #6950a1;
  padding: 2rem;
  width: auto;
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
  margin: 10px 0px 10px 200px;
`

export const GameContainerPage3 = styled.div`
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-start;
  margin: 10px 0px 10px 200px;
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

export const GameImagePage3 = styled.img`
  max-width: 150px;
  height: auto;
  margin-right: 20px;
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

export const Span = styled.span`
  font-weight: 600;
  font-size: 15px;
`

export const SpanTitle = styled.div`
  font-weight: 600;
  font-size: 25px;
`

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const SpanContainerPage3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
`

export const ButtonMoreOrLess = styled.button`
  color: white;
  background-color: #6950a1;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-right: 5px;
`

export const ButtonsDisplay = styled.div`
  display: flex;
`

export const SpanTotal = styled.span`
  margin: 10px 0px 0px 200px;
  font-weight: 700;
`

export const ButtonCheckbox = styled.input`
  height: 25px;
  width: 25px;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 5px;
  &:checked {
    background-color: #6950a1;
  }
`