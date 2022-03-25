import React from "react";
import styled from "styled-components";

// ICONS
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
          <Logo>PEN WORLD</Logo>
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
  height: 60px;
`;

const NavWrapper = styled.div`
  padding: 10px 20px;
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
  color: gray;
  font-size: 16px;
`;

const CenterCol = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
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
