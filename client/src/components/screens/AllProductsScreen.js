import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import SingleProduct from "../elements/SingleProduct";

import { getAllProducts } from "../../redux/actions/productActions";

const AllProductsScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Container>
      <ProductsHeader>All Products</ProductsHeader>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        products.map((product) => <SingleProduct product={product} />)
      )}
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
