import React from "react";
import styled from "styled-components";

function CategoryContainer({ isCategoryActive, handleCategory, category }) {
  return (
    <Category
      onClick={handleCategory}
      style={{
        borderColor: isCategoryActive === false ? "#cccccc" : "#767676",
      }}
    >
      <span>{category}</span>
      <CategoryToggle>{isCategoryActive === false ? "+" : "-"}</CategoryToggle>
    </Category>
  );
}

const Category = styled.div`
  width: 182px;
  height: 100%;
  ${({ theme }) => theme.centerSpaceBetween}
  border: 1px solid;
  padding: 10px 15px;
`;

const CategoryToggle = styled.span`
  font-size: 24px;
`;

export default CategoryContainer;
