import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

import { categoryDetails } from "../../data";

const Categories = () => {
  return (
    <Container>
      <SectionHeading>Shop by Category</SectionHeading>
      <SectionText>How can we help?</SectionText>
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
  background: #ffffff;
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 15px;
  padding: 0rem 10rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    padding: 0rem 2rem;
  }
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

  /* @media screen and (max-width: 868px) {
    margin-bottom: 1rem;
  } */
`;

const SectionText = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-align: center;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  letter-spacing: 2px;
  color: #480048;
  background-color: white;

  /* @media screen and (max-width: 868px) {
    margin-bottom: 1rem;
  } */
`;
