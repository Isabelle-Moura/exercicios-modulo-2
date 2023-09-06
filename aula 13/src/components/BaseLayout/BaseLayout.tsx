import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import { Container, Footer } from "../../styles/BaseLayout";

const BaseLayout = () => {
  return (
    <>
      <Nav />
      <Container>
        <Outlet />
      </Container>
      <Footer>Footer</Footer>
    </>
  );
};

export default BaseLayout;
