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
      <Wrapper imgIndex={imgIndex}>
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
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <RightArrow />
      </Arrow>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.imgIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bgColor};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const HeroItems = styled.div`
  flex: 1;
  padding: 50px;
`;

const HeroH1 = styled.h1`
  font-size: clamp(1rem, 5vw, 2.7rem);
  letter-spacing: 10px;
  font-weight: 700;
`;

const HeroText = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
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
`;
