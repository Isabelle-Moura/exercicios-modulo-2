import { ReactNode } from "react";
import HeaderBlog from "../header/HeaderBlog";
import { Container } from "../../assets/global";

type Props = {
  children: ReactNode;
};

export const Mock = ({ children }: Props) => {
  return (
    <>
      <HeaderBlog />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};