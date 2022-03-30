import React from "react";
import styled from "styled-components";

import SingleProduct from "../elements/SingleProduct";

const AllProductsScreen = () => {
  return (
    <Container>
      <ProductsHeader>All Products</ProductsHeader>
      {/* <OptionsWrapper>
        <Options>
          <Text>Search Products: </Text>
          <Select>
            <Option disabled selected>
              Origin
            </Option>
            <Option>American</Option>
            <Option>Japanese</Option>
            <Option>German</Option>
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
      </OptionsWrapper> */}
      <SingleProduct />
    </Container>
  );
};

export default AllProductsScreen;

const Container = styled.div``;

const ProductsHeader = styled.h1`
  margin: 20px;
`;

const OptionsWrapper = styled.div``;

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
