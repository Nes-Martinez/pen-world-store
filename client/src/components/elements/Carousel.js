import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { penDetails } from "../../data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const handleClick = (direction) => {
    if (direction === "left") {
      setImgIndex(imgIndex > 0 ? imgIndex - 1 : 2);
    } else {
      setImgIndex(imgIndex < 2 ? imgIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <LeftArrow />
      </Arrow>
      <SectionWrapper imgIndex={imgIndex}>
        {penDetails.map((item) => (
          <Slide bg={item.bgColor} key={item.id}>
            <ImgContainer>
              <Image src={item.imgUrl} />
            </ImgContainer>

            <HeroItems>
              <HeroH1>{item.title}</HeroH1>
              <HeroText>{item.description}</HeroText>
              <BtnWrapper>
                <MainButton
                  to="products"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Shop Pens
                </MainButton>
              </BtnWrapper>
            </HeroItems>
          </Slide>
        ))}
      </SectionWrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <RightArrow />
      </Arrow>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 968px) {
    height: auto;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const LeftArrow = styled(ArrowLeftOutlined)``;

const RightArrow = styled(ArrowRightOutlined)``;

const SectionWrapper = styled.div`
  display: grid;
  z-index: 1;

  margin-right: auto;
  margin-left: auto;

  justify-content: center;
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.imgIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bgColor};

  @media screen and (max-width: 968px) {
    padding: 0rem 0rem;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 0.9;
`;

const Image = styled.img`
  /* height: 100%; */
`;

const HeroItems = styled.div`
  vertical-align: top;
  flex: 0.5;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const HeroH1 = styled.h1`
  font-size: clamp(1rem, 3vw, 2.7rem);
  letter-spacing: 10px;
  font-weight: 700;
`;

const HeroText = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 32px;
  align-items: right;
`;

const MainButton = styled(Link)`
  border-radius: 20px;
  background: purple;
  white-space: nowrap;
  padding: 18px 40px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: right;
  align-items: right;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: purple;
  }

  @media screen and (max-width: 768px) {
    border-radius: 20px;
    background: purple;
    white-space: nowrap;
    padding: 12px 20px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: right;
    align-items: right;
    transition: all 0.2s ease-in-out;
  }
`;
