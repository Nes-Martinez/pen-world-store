import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

// ICONS
import { FaPenNib } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = ({ toggle }) => {
  return (
    <Container>
      <NavWrapper>
        <LeftCol>
          <NavText>English</NavText>
          <SearchContainer>
            <SearchInput />
            <SearchIcon />
          </SearchContainer>
        </LeftCol>
        <CenterCol>
          <Logo>
            <PenIcon /> PEN WORLD
          </Logo>
        </CenterCol>
        <RightCol>
          <MenuLink to="/register">Register</MenuLink>
          <MenuLink to="/login">Login</MenuLink>
          <CartContainer>
            <CartLink to="/cart">
              <CartIcon /> Cart:
              <CartBadge>0</CartBadge>
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
  background-color: #06114f;
  color: white;
`;

const NavWrapper = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftCol = styled.div`
  flex: 1;
  display: flex;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavText = styled.span`
  font-size: 14px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
`;

const SearchIcon = styled(Search)`
  color: white;
  font-size: 16px;
`;

const CenterCol = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2.7rem);
  font-weight: 700;
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: flex-end;

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
  background: purple;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    background-color: yellow;
    transition: all 0.2s ease-in-out;
  }
`;

const CartIcon = styled(ShoppingCartOutlined)``;

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
  font-size: clamp(1.5rem, 2.5vw, 2.7rem);
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
