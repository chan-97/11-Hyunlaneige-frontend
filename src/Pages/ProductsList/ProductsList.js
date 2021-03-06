import React, { useState, useEffect } from "react";
import styled from "styled-components";
import productsConfig from "./productsConfig";
import CategoryContainer from "./CategoryContainer";
import SortByContainer from "./SortByContainer";
import OrderShowAndHide from "./OrderShowAndHide";
import ListDetails from "./ListDetails";
import Item from "./Item";

const listHeaderName = {
  category: "카테고리",
  sortBy: "신상품 순",
};

function ProductsList() {
  const [productList, setProductList] = useState([]);
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const [isSortByActive, setIsSortByActive] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/Data/mockData/productsList.json")
      .then((res) => res.json())
      .then((res) => {
        setProductList(res.product_list);
      });
  }, []);

  return (
    <ProductsListOuter>
      <HeaderImage>
        <ProductsPath>
          <PathWrapper>
            <li>스킨케어</li>
            <SeeAll>전체보기</SeeAll>
          </PathWrapper>
        </ProductsPath>
        <TitleWrapper>
          <TitleOfProducts>스킨케어</TitleOfProducts>
        </TitleWrapper>
      </HeaderImage>
      <ProductsListContainer>
        <ListHeaderWrapper>
          <ListHeader>
            <CategoryContainer
              handleCategory={() => setIsCategoryActive(!isCategoryActive)}
              isCategoryActive={isCategoryActive}
              category={listHeaderName.category}
            />
            <SortByWrapper>
              <SortByContainer
                handleSortBy={() => setIsSortByActive(!isSortByActive)}
                isSortByActive={isSortByActive}
                sortBy={listHeaderName.sortBy}
              />
              {isSortByActive === false ? null : <OrderShowAndHide />}
            </SortByWrapper>
            <TotalProducts>스킨케어 {productList.length}개 상품</TotalProducts>
          </ListHeader>
          {isCategoryActive === false ? null : <ListDetails />}
        </ListHeaderWrapper>
        <ListContainer>
          {productList &&
            productList.map((product) => (
              <Item
                key={product.product_id}
                isNew={product.is_new}
                isBest={product.is_best}
                image={product.image}
                hashFirst={product.hash_first}
                hashSecond={product.hash_second}
                productName={product.product_name}
                hover={product.hover}
              />
            ))}
        </ListContainer>
      </ProductsListContainer>
    </ProductsListOuter>
  );
}

const ProductsListOuter = styled.main`
  width: 100vw;
  padding-top: 60px;
`;

const HeaderImage = styled.header`
  width: 100%;
  height: 320px;
  margin-bottom: 50px;
  position: relative;
  background-image: url(${productsConfig.url.HeaderImage});
  background-position: center;
`;

const ProductsPath = styled.ul`
  display: inline-block;
  padding: 15px 50px 0 50px;
  font-size: 14px;
`;

const PathWrapper = styled.div`
  display: flex;
`;

const SeeAll = styled.li`
  &:before {
    content: ">";
  }
`;

const TitleWrapper = styled.div`
  ${({ theme }) => theme.full}
  ${({ theme }) => theme.center}
  position: absolute;
  top: 0;
`;

const TitleOfProducts = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 400;
`;

const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListHeaderWrapper = styled.section`
  margin-bottom: 20px;
`;

const ListHeader = styled.header`
  width: 1180px;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 8px;
`;

const SortByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 185px;
  z-index: 5;
`;

const ListContainer = styled.ul`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const TotalProducts = styled.span`
  position: absolute;
  right: 0;
  font-weight: 300;
`;

export default ProductsList;
