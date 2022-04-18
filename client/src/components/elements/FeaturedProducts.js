import React from "react";
import styled from "styled-components";

import { productDetails } from "../../data.js";
import SingleProduct from "./SingleFeatured";

const FeaturedProducts = () => {
  return (
    <Container>
      <SectionHeading>Featured Products</SectionHeading>
      <Wrapper>
        {productDetails.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
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
  padding: 3rem 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #06114f;
  background-color: white;

  @media screen and (max-width: 868px) {
    margin-bottom: 1rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  justify-items: center;
  padding: 2rem 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;
