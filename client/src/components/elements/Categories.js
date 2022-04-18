import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

import { categoryDetails } from "../../data";

const Categories = () => {
  return (
    <Container>
      <SectionHeading>Shop by Category</SectionHeading>
      <SectionWrapper>
        {categoryDetails.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </SectionWrapper>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  width: 100vw;
  height: auto;
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 15px;
  padding: 0 1.5rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
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
