import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

import { categoryDetails } from "../../data";

const Categories = () => {
  return (
    <Container>
      <HeroH1>Text</HeroH1>
      <CatText>Text</CatText>
      <Wrapper>
        {categoryDetails.map((item) => (
          <CategoryItem item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeroH1 = styled.h1`
  text-align: center;
`;

const CatText = styled.p`
  text-align: center;
`;
