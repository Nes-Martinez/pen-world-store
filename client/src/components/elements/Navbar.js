import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

// ICONS
import { FaPenNib } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({ toggle }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartTotal = () => {
    return cartItems.reduce(
      (quantity, item) => quantity + Number(item.quantity),
      0
    );
  };

  return (
    <Container>
      <NavWrapper>
        <LeftCol>
          <Logo to="/">
            <PenIcon /> PEN WORLD
          </Logo>
        </LeftCol>
        <RightCol>
          <MenuLink to="/products">All Products</MenuLink>
          <MenuLink to="/register">Register</MenuLink>
          <MenuLink to="/login">Login</MenuLink>
          <MenuLink to="/">Newsletter</MenuLink>
          <CartContainer>
            <CartLink to="/cart">
              <CartIcon /> Cart:
              <CartBadge>{getCartTotal()}</CartBadge>
            </CartLink>
          </CartContainer>
        </RightCol>
        <MobileMenu onClick={toggle}>
          <FaBars />
        </MobileMenu>
      </NavWrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: auto;
  background-color: #480048;
  color: white;
`;

const NavWrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftCol = styled.div`
  flex: 1;
  text-align: right;
  padding-right: 3rem;
`;

const Logo = styled(LinkR)`
  color: #fff;
  font-size: clamp(1.3rem, 3vw, 2.7rem);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9078a8;
  }
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const MenuLink = styled(LinkR)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9078a8;
  }
`;

const CartLink = styled(LinkR)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
`;

const CartContainer = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  background: #a81878;
  padding: 10px 20px;
  border-radius: 8px;

  &:hover {
    background-color: #9078a8;
    transition: all 0.2s ease-in-out;
  }
`;

const CartIcon = styled(BsFillCartFill)``;

const CartBadge = styled.span`
  width: 30px;
  height: 30px;
  background-color: #f4f4f4;
  border-radius: 50%;
  margin-left: 8px;
  color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const PenIcon = styled(FaPenNib)`
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  margin-right: 10px;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

const MobileMenu = styled.div`
  font-size: clamp(1.5rem, 3vw, 2.7rem);
  display: none;
  color: #fff;
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;
