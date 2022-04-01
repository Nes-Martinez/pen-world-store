import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleProduct = ({ product }) => {
  return (
    <Container>
      <ProductImage src={product.imageUrl} />

      <ProductInfo>
        <ProductName>{product.name}</ProductName>

        <ProductDescription>
          {product.description.substring(0, 60)}...
        </ProductDescription>

        <ProductPrice>${product.price}</ProductPrice>

        <ViewButton to={`/products/${product._id}`}>View</ViewButton>
      </ProductInfo>
    </Container>
  );
};

export default SingleProduct;

const Container = styled.div`
  width: 300px;
  padding: 1rem;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 170px;
  object-fit: contain;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  margin-bottom: 8px;
`;

const ProductName = styled.p`
  font-size: 1rem;
  overflow: hidden;
`;

const ProductDescription = styled.p`
  font-size: 0.8rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
`;

const ViewButton = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  color: #171717;
  width: 100%;
  padding: 8px 16px;
  background-color: #f4f4f4;
  border: 1px solid #171717;
  font-size: 1rem;

  &:hover {
    background: #171717;
    color: #f4f4f4;
  }
`;
