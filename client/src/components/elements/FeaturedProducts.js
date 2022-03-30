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
  padding: 60px 1px 1px 1px;
  height: auto;
  background-color: #06114f;

  @media screen and (max-width: 768px) {
    padding: 0.1rem calc((100vw - 1300px) / 2);
  }
`;

const SectionHeading = styled.div`
  font-size: clamp(1.2rem, 45vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
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
