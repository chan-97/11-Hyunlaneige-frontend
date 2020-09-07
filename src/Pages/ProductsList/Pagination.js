import React from "react";
import styled from "styled-components";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationOuter>
      {pageNumbers.map((number) => (
        <PageBtn key={number} onClick={() => paginate(number)}>
          {number}
        </PageBtn>
      ))}
    </PaginationOuter>
  );
}

const PaginationOuter = styled.ul`
  ${({ theme }) => theme.justifyCenter};
  width: 1180px;
  height: 36px;
  margin-bottom: 120px;
`;

const PageBtn = styled.li`
  ${({ theme }) => theme.center};
  width: 33px;
  height: 33px;
  margin: 0 4px;
  color: white;
  background-color: #2b2b2b;

  &:hover {
    background-color: #4478be;
    text-decoration: underline;
    transition: 0.3s;
  }
`;

export default Pagination;
