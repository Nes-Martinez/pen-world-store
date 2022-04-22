import React from "react";
import styled from "styled-components";

const Announcement = () => {
  return (
    <div>
      <Container>Register today for exclusive discounts.</Container>
    </div>
  );
};

export default Announcement;

const Container = styled.div`
  height: auto;
  padding: 1rem 0rem;
  background-color: white;
  color: #06114f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`;
