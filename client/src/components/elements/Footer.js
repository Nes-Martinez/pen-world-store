import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaPenNib } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinks>
              <FooterLinkHeader>Information</FooterLinkHeader>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/products">All Products</FooterLink>
              <FooterLink to="/policy">Privacy Policy</FooterLink>
            </FooterLinks>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinks>
              <FooterLinkHeader>Quick Links</FooterLinkHeader>
              <FooterLink to="/cart">My Account</FooterLink>
              <FooterLink to="/register">Sign Up</FooterLink>
              <FooterLink to="/policy">Terms of Service</FooterLink>
            </FooterLinks>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <FooterLogo to="/" onClick={toggleHome}>
              <PenIcon /> PEN WORLD
            </FooterLogo>
            <WebsiteRights>
              PEN WORLD &copy; {new Date().getFullYear()}. All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #480048;
`;

const FooterWrapper = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkHeader = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9078a8;
  }
`;

const FooterLinkExternal = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9078a8;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9078a8;
  }
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

const PenIcon = styled(FaPenNib)`
  margin-right: 10px;
  font-size: 30px;

  &:hover {
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
