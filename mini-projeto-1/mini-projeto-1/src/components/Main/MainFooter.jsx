import React from "react";
import { NextButton } from "../../styles/styles";

const MainFooter = ({ p, handleChangePage }) => {
  return <NextButton onClick={handleChangePage}>{p}</NextButton>;
};

export default MainFooter;
