import React from "react";
import { PageTitle } from "../../styles/styles";
import { CartCounter } from "../../styles/styles";

const MainHeader = ({ p, cart }) => {
  return (
    <>
      <PageTitle>
        <div>
          <span>{p}</span>
        </div>
        <div>
          <CartCounter>
            <span className="cart-number">{cart.length}</span>
          </CartCounter>
        </div>
      </PageTitle>
    </>
  );
};

export default MainHeader;
