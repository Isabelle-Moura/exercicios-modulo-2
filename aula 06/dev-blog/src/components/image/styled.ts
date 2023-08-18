import { styled } from "styled-components";

export const Image = styled.div`
  position: relative;
  width: 400px;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    height: 220px;
  }
`