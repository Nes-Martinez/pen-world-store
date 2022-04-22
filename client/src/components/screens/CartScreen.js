import React, { useEffect } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import CartItem from "../elements/CartItem";

import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const quantityHandler = (id, quantity) => {
    dispatch(addToCart(id, quantity));
  };

  const removeItemHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getTotalInventory = () => {
    return cartItems.reduce((qty, item) => Number(item.quantity) + qty, 0);
  };

  const getTotalCost = () => {
    return cartItems.reduce(
      (price, item) => item.price * item.quantity + price,
      0
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <CartContainer>
        <CartLeft>
          <CartTitle>Your Cart</CartTitle>
          {cartItems.length === 0 ? (
            <CartText>
              Your Cart Is Empty <CartLink to="/">Go Back</CartLink>
            </CartText>
          ) : (
            cartItems.map((product) => (
              <CartItem
                product={product}
                quantityHandler={quantityHandler}
                removeItemHandler={removeItemHandler}
              />
            ))
          )}
        </CartLeft>

        <CartRight>
          <CartRightInfo>
            <TotalText>Subtotal: ({getTotalInventory()}) items</TotalText>
            <PriceText>${getTotalCost().toFixed(2)}</PriceText>
          </CartRightInfo>
          <BtnWrapper>
            <CheckoutButton>Proceed To Checkout</CheckoutButton>
          </BtnWrapper>
        </CartRight>
      </CartContainer>
    </Container>
  );
};

export default CartScreen;

const Container = styled.div``;

const CartContainer = styled.div`
  display: flex;
  margin: 2rem auto;
`;

const CartLeft = styled.div`
  flex: 0.7;
  margin-right: 1rem;
  background: transparent;
  padding: 1rem;
`;

const CartTitle = styled.h2`
  margin-bottom: 1rem;
`;

const CartText = styled.div``;

const CartLink = styled(LinkR)``;

const CartRight = styled.div`
  flex: 0.3;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  height: fit-content;
  padding: 1rem;
  margin-right: 1rem;
`;

const CartRightInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

const TotalText = styled.p`
  font-weight: bold;
  padding: 8px;
`;

const PriceText = styled.p`
  padding: 8px;
`;

const BtnWrapper = styled.div``;

const CheckoutButton = styled.div`
  padding: 10px 17px;
  width: 100%;
  background: #171717;
  color: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
