import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import SingleFeatured from "./SingleFeatured";
import { getFeaturedProducts } from "../../redux/actions/productActions.js";

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  const getFeatured = useSelector((state) => state.getFeatured);

  const { products, loading, error } = getFeatured;

  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  return (
    <Container>
      <SectionHeading>Featured Products</SectionHeading>
      <SectionText>Browse our most popular sellers.</SectionText>
      <Wrapper>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => <SingleFeatured product={product} />)
        )}
      </Wrapper>
    </Container>
  );
};

export default FeaturedProducts;

const Container = styled.div`
  width: 100vw;
  height: auto;
`;

const SectionHeading = styled.div`
  font-size: clamp(1rem, 7vw, 2.7rem);
  text-align: center;
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #480048;
  background-color: white;

  @media screen and (max-width: 868px) {
    margin-bottom: 1rem;
  }
`;

const SectionText = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-align: center;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  letter-spacing: 2px;
  color: #480048;
  background-color: white;

  @media screen and (max-width: 868px) {
    margin-bottom: 1rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  justify-items: center;
  padding: 2rem 10rem;
  background: #ffffff;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;
