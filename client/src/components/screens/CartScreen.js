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
      <CartTitle>Your Cart</CartTitle>
      <CartContainer>
        <CartLeft>
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
  display: grid;
  margin: 2rem auto;
  grid-template-columns: 3fr 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const CartLeft = styled.div`
  flex: 0.9;

  background: transparent;
  padding: 1rem;
`;

const CartTitle = styled.h2`
  font-size: clamp(1rem, 4vw, 1.7rem);
  text-align: center;
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #480048;

  @media screen and (max-width: 868px) {
    margin-bottom: 1rem;
  }
`;

const CartText = styled.div``;

const CartLink = styled(LinkR)``;

const CartRight = styled.div`
  flex: 0.2;
  margin: 2rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  height: fit-content;
  padding: 1rem;
`;

const CartRightInfo = styled.div`
  padding: 1rem;
`;

const TotalText = styled.p`
  font-weight: bold;
`;

const PriceText = styled.p`
  letter-spacing: 3px;
`;

const BtnWrapper = styled.div``;

const CheckoutButton = styled.div`
  width: 60%;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  background: #a81878;
  padding: 10px 20px;
  border-radius: 8px;

  &:hover {
    background-color: #9078a8;
    transition: all 0.2s ease-in-out;
    opacity: 0.9;
  }
`;
