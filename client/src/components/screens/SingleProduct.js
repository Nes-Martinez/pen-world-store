import React from "react";
import styled from "styled-components";
import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";
import SignUp from "../elements/SignUp";

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <ProductWrapper>
        <ImageWrapper>
          <Image src="" />
        </ImageWrapper>
        <InfoWrapper>
          <ProductName>Pen</ProductName>
          <ProductDescription></ProductDescription>
          <PriceText></PriceText>
          <OptionsWrapper>
            <Options>
              <Text>Select Option: </Text>
              <Select>
                <Option disabled selected>
                  Color
                </Option>
                <Option>Black</Option>
                <Option>Silver</Option>
                <Option>Red</Option>
              </Select>
              <Select>
                <Option disabled selected>
                  Nib Size
                </Option>
                <Option>Extra Fine</Option>
                <Option>Fine</Option>
                <Option>Medium</Option>
                <Option>Broad</Option>
              </Select>
            </Options>
          </OptionsWrapper>
        </InfoWrapper>
      </ProductWrapper>
      <SignUp />
      <Footer />
    </Container>
  );
};

export default SingleProduct;

const Container = styled.div``;

const ProductWrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const ProductName = styled.h1`
  font-weight: 200;
`;

const ProductDescription = styled.p`
  margin: 20px 0px;
`;

const PriceText = styled.p`
  font-weight: 100;
  font-size: 40px;
`;

const OptionsWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`;

const Options = styled.div`
  margin: 20px;
`;

const Text = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;
