import React from "react";
import styled from "styled-components";

// ICONS
import { FaPenNib } from "react-icons/fa";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = () => {
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
          <MenuLink>Register</MenuLink>
          <MenuLink>Login</MenuLink>
          <MenuLink>
            <Badge badgeContent={5} color="primary">
              <CartIcon />
            </Badge>
          </MenuLink>
        </RightCol>
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
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftCol = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
  font-size: clamp(1.5rem, 5vw, 2.7rem);
  font-weight: 700;
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: flex-end;
`;

const MenuLink = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const CartIcon = styled(ShoppingCartOutlined)``;

const PenIcon = styled(FaPenNib)`
  margin-right: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
