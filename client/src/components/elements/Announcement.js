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
  height: auto;
  background-color: white;
  color: #06114f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`;
