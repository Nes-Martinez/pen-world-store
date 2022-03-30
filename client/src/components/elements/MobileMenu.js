import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

import { FaTimes } from "react-icons/fa";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MenuContainer isOpen={isOpen} onClick={toggle}>
      <TopIcon onClick={toggle}>
        <XIcon />
      </TopIcon>
      <SidebarWrapper>
        <li>
          <MenuLink to="/" onClick={toggle}>
            Home
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/register" onClick={toggle}>
            Register
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/login" onClick={toggle}>
            login
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/cart" onClick={toggle}>
            Cart
          </MenuLink>
        </li>
      </SidebarWrapper>
    </MenuContainer>
  );
};

export default MobileMenu;

const MenuContainer = styled.div`
  width: 70%;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const TopIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const XIcon = styled(FaTimes)`
  color: purple;
`;

const SidebarWrapper = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const MenuLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: purple;
  cursor: pointer;
  transition: color 300ms;

  &:hover {
    color: #cd7f32;
    transition: 0.3s ease-out;
  }
`;
