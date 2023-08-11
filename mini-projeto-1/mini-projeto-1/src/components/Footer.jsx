import React from "react";
import { FooterImages } from "../styles/styles";
import { Footeri } from "../styles/styles";

const Footer = () => {
  return (
    <Footeri>
      <div style={{marginLeft: '1%', fontWeight: '600'}}>Meios de pagamento:</div>
      <div>
        <FooterImages src="/visa 1.png"></FooterImages>
        <FooterImages src="/master_card 1.png"></FooterImages>
        <FooterImages src="/boleto 1.png"></FooterImages>
        <FooterImages src="/hipercard 1.png"></FooterImages>
      </div>
    </Footeri>
  );
};

export default Footer;
