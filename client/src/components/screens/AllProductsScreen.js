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
      <Wrapper>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => <SingleProduct product={product} />)
        )}
      </Wrapper>
    </Container>
  );
};

export default AllProductsScreen;

const Container = styled.div`
  width: 100vw;
  padding: 60px 1px 1px 1px;
  height: auto;
  padding: 2rem 15rem;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const ProductsHeader = styled.h1`
  font-size: clamp(1rem, 7vw, 2.7rem);
  margin: 20px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;
