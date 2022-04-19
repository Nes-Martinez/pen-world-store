import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.imgUrl} />
      <Info>
        <Title>{item.title}</Title>
        <Button to={item.buttonLink}>{item.buttonText}</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  line-height: 2;
  width: 100%;
  position: relative;
  transition: 0.2s escape;

  &:hover {
    transform: scale(1.03);
  }

  &:hover {
    filter: brightness(100%);
  }

  @media screen and (max-width: 1200px) {
    max-height: 50vh;
  }
`;

const Title = styled.h1`
  font-size: clamp(1.2rem, 7vw, 2rem);
  color: white;
  margin: 20px;
  z-index: 10;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: brightness(80%);

  &:hover {
    filter: brightness(100%);
  }
`;

const Button = styled(Link)`
  border-radius: 20px;
  background: purple;
  white-space: nowrap;
  padding: 10px 20px;
  color: #ffffff;
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: right;
  align-items: right;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: purple;
  }
`;
