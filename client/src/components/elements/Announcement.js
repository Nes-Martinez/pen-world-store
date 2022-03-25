import React from "react";
import styled from "styled-components";

const Announcement = () => {
  return (
    <div>
      <Container>Sales now!</Container>
    </div>
  );
};

export default Announcement;

const Container = styled.div`
  height: 30px;
  background-color: purple;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`;
