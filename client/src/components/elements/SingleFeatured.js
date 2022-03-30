import React from "react";
import styled from "styled-components";

import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

const SingleProduct = ({ product }) => {
  return (
    <Container>
      <InfoContainer>
        <TitleWrapper>
          <Title>{product.title}</Title>
        </TitleWrapper>

        <IconWrapper>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
        </IconWrapper>
      </InfoContainer>
      <Image src={product.imgUrl} />
    </Container>
  );
};

export default SingleProduct;

const InfoContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: column;
  align-items: center;
  padding-top: 30%;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  line-height: 2;
  background: #f4f4f4;
  width: 100%;
  height: auto;
  position: relative;
  transition: 0.2s escape;

  &:hover {
    transform: scale(1.03);
  }

  &:hover ${InfoContainer} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
`;
