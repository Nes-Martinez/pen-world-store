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
  padding-top: 60px;
  padding-bottom: 0px;
  height: auto;
  background-color: white;

  /* @media screen and (max-width: 768px) {
    padding: 0.1rem calc((100vw - 1300px) / 2);
  } */
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const SectionHeading = styled.div`
  font-size: clamp(1.2rem, 45vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #06114f;
`;
