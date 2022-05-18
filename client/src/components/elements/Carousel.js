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
                <MainButton to={item.buttonLink}>{item.buttonText}</MainButton>
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
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    height: 60vh;
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
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.imgIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bgColor};

  @media screen and (max-width: 600px) {
    justify-content: center;
    padding: 0rem 0rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  height: auto;
  flex: 1.2;
`;

const Image = styled.img`
  @media screen and (max-width: 968px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroItems = styled.div`
  flex: 0.8;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 40px;
  }
`;

const HeroH1 = styled.h1`
  font-size: clamp(1rem, 3vw, 2.7rem);
  letter-spacing: 5px;
  font-weight: 700;
  color: #480048;

  @media screen and (max-width: 768px) {
    letter-spacing: 5px;
    padding-bottom: 0px;
  }
`;

const HeroText = styled.p`
  margin: 0px 0px;
  padding-bottom: 20px;
  padding-right: 5px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  @media screen and (max-width: 968px) {
    padding-bottom: 10px;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 22px;
  align-items: right;

  @media screen and (max-width: 968px) {
    margin-top: 10px;
  }
`;

const MainButton = styled(Link)`
  border-radius: 20px;
  background: #a81878;
  white-space: nowrap;
  padding: 18px 30px;
  color: #ffffff;
  text-decoration: none;
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
    background: #9078a8;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    border-radius: 15px;
    background: #a81878;
    white-space: nowrap;
    padding: 12px 20px;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
  }
`;
