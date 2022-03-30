import React from "react";
import styled from "styled-components";

const Backdrop = ({ isOpen, toggle }) => {
  return (
    isOpen && (
      <BackContainer onClick={toggle}>
        <div>&nbsp;</div>
      </BackContainer>
    )
  );
};

export default Backdrop;

const BackContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;
