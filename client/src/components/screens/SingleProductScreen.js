import React from "react";
import styled from "styled-components";

const SingleProductScreen = () => {
  return (
    <Container>
      <ProductWrapper>
        <ProductLeft>
          <ImageWrapper>
            <img src="https://cdn.shopify.com/s/files/1/1693/8459/products/cross-wanderlust-fountain-pen-in-malta_633.jpg?v=1620345762" />
          </ImageWrapper>
          <InfoLeftWrapper>
            <ProductName>Pen</ProductName>
            <ProductDescription>
              The LAMY safari is a timelessly modern pen for the young – and the
              young at heart – and is in a class of its own.
            </ProductDescription>
            <PriceText>$30</PriceText>
            <StockText>In Stock? Yes</StockText>
          </InfoLeftWrapper>
        </ProductLeft>
        <ProductRight>
          <InfoRightWrapper>
            <OptionsWrapper>
              <OptionRow>
                <HeaderText>Select Options: </HeaderText>
              </OptionRow>
              <OptionRow>
                <Select>
                  <Option disabled selected>
                    Color
                  </Option>
                  <Option>Black</Option>
                  <Option>Silver</Option>
                  <Option>Red</Option>
                </Select>
              </OptionRow>
              <OptionRow>
                <Select>
                  <Option disabled selected>
                    Nib Size
                  </Option>
                  <Option>Extra Fine</Option>
                  <Option>Fine</Option>
                  <Option>Medium</Option>
                  <Option>Broad</Option>
                </Select>
              </OptionRow>
              <BtnWrapper>
                <AddButton>Add to Cart</AddButton>
              </BtnWrapper>
            </OptionsWrapper>
          </InfoRightWrapper>
        </ProductRight>
      </ProductWrapper>
    </Container>
  );
};

export default SingleProductScreen;

const Container = styled.div``;

const ProductWrapper = styled.div`
  margin: 1rem auto;
  display: flex;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const ProductLeft = styled.div`
  display: flex;
  flex: 0.8;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    flex: 1;
  }
`;

const ImageWrapper = styled.div`
  margin: 1rem;
  flex: 0.6;

  @media screen and (max-width: 960px) {
    flex: 1;
  }
`;

const InfoLeftWrapper = styled.div`
  margin: 1rem;
  flex: 0.4;
  background: #fff;
  height: fit-content;
  font-size: 0.9rem;

  @media screen and (max-width: 960px) {
    flex: 1;
  }
`;

const ProductName = styled.h1`
  font-weight: bold;
  font-size: 1.3rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ProductDescription = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const PriceText = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const StockText = styled.p`
  padding: 1rem;
`;

const ProductRight = styled.div`
  flex: 0.2;

  @media screen and (max-width: 960px) {
    flex: 1;
    padding: 1rem;
  }
`;

const InfoRightWrapper = styled.div`
  width: 300px;
  margin: 1.5rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionRow = styled.div`
  margin: 20px 20px;
`;

const HeaderText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const OptionsText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const BtnWrapper = styled.div`
  margin-top: 32px;
  align-items: center;
  margin: 20px 20px;
`;

const AddButton = styled.div`
  max-width: 80%;
  border-radius: 10px;
  background: purple;
  white-space: nowrap;
  padding: 18px 30px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: purple;
  }
`;
