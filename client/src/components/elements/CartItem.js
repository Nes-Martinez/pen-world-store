import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

import { FaTrash } from "react-icons/fa";

const CartItem = () => {
  return (
    <CartItemContainer>
      <CartItemImage>
        <img src="https://cdn.shopify.com/s/files/1/1693/8459/products/cross-wanderlust-fountain-pen-in-malta_633.jpg?v=1620345762" />
      </CartItemImage>
      <CartItemName to={`/products/1`}>
        <ItemName>Pen</ItemName>
      </CartItemName>
      <ItemPrice>$100</ItemPrice>
      <CartSelect>
        <Option value="1">1</Option>
      </CartSelect>
      <DeleteButton>
        <TrashIcon />
      </DeleteButton>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 8px;
  background: #fff;
  border-radius: 2px;
  place-items: center;
  margin-bottom: 8px;
`;

const CartItemImage = styled.div``;

const CartItemName = styled(LinkR)`
  text-decoration: none;
  color: #171717;
`;

const ItemName = styled.p``;

const ItemPrice = styled.p``;

const CartSelect = styled.select`
  padding: 10px 17px;
`;

const Option = styled.option``;

const DeleteButton = styled.div`
  padding: 10px 17px;
  color: red;
  background: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover,
  &:active,
  &:focus {
    background: #171717;
    transform: scale(1.2);
  }
`;

const TrashIcon = styled(FaTrash)``;
