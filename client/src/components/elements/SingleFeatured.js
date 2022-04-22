import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

import { addToCart } from "../../redux/actions/cartActions";

const SingleFeatured = ({ product }) => {
  console.log("product", product._id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity] = useState(1);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, quantity));
    navigate("/cart");
  };

  return (
    <Container>
      <InfoContainer>
        <TitleWrapper>
          <Title>{product.name}</Title>
        </TitleWrapper>

        <IconWrapper>
          <Icon onClick={addToCartHandler}>
            <ShoppingCartOutlined />
          </Icon>
          <IconLink to={`/products/${product._id}`}>
            <SearchOutlined />
          </IconLink>
        </IconWrapper>
      </InfoContainer>
      <Image src={product.featuredImage} />
    </Container>
  );
};

export default SingleFeatured;

const InfoContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

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

const IconLink = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  text-decoration: none;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #a81878;
    color: #ffffff;
    transform: scale(1.1);
  }
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
    background-color: #a81878;
    color: #ffffff;
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
