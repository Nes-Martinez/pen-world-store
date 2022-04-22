import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

import { FaTrash } from "react-icons/fa";

const CartItem = ({ product, quantityHandler, removeItemHandler }) => {
  console.log("product", product);

  return (
    <CartItemContainer>
      <CartItemImage>
        <img src={product.featuredImage} alt={product.name} />
      </CartItemImage>
      <CartItemName to={`/products/${product.id}`}>
        <ItemName>{product.name}</ItemName>
      </CartItemName>
      <ItemPrice>${product.price} ea.</ItemPrice>
      <CartSelect
        value={product.quantity}
        onChange={(evt) => quantityHandler(product.id, evt.target.value)}
      >
        {[...Array(product.inventoryNum).keys()].map((x) => (
          <Option key={x + 1} value={x + 1}>
            {x + 1}
          </Option>
        ))}
      </CartSelect>
      <DeleteButton onClick={() => removeItemHandler(product.id)}>
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
  grid-gap: 8px;
  background: #fff;
  border-radius: 2px;
  place-items: center;
  margin-bottom: 8px;
  margin-right: 0px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const CartItemImage = styled.div``;

const CartItemName = styled(LinkR)`
  text-decoration: none;
  color: #171717;
`;

const ItemName = styled.p`
  font-weight: 700;
`;

const ItemPrice = styled.p``;

const CartSelect = styled.select`
  padding: 10px 17px;
`;

const Option = styled.option``;

const DeleteButton = styled.button`
  padding: 10px 17px;
  color: #a81878;
  background: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover,
  &:active,
  &:focus {
    background-color: black;
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

const TrashIcon = styled(FaTrash)``;
