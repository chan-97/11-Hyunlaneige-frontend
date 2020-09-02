import React from "react";
import styled from "styled-components";
import productsConfig from "./productsConfig";
import PartOfType from "./InTheCategory/PartOfType";
import PartOfWorries from "./InTheCategory/PartOfWorries";
import PartOfLine from "./InTheCategory/PartOfLine";

function ListDetails() {
  return (
    <ListDetailsOuter>
      <CloseBtn />
      <Lists>
        <AllList>전체보기</AllList>
        <WrapperOfPart>
          <PartOfType />
          <PartOfWorries />
          <PartOfLine />
        </WrapperOfPart>
      </Lists>
    </ListDetailsOuter>
  );
}

const ListDetailsOuter = styled.ul`
  width: 1180px;
  padding: 18px 5% 30px 5%;
  border: ${productsConfig.color.borderColorGray};
  position: relative;
`;

const CloseBtn = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 15px;
  right: 20px;
  background-image: url("https://ssl.gstatic.com/translate/2x_mobile.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center bottom -196px;
  opacity: 0.3;
`;

const Lists = styled.li`
  width: 100%;
  padding: 0 2%;
`;

const AllList = styled.span`
  display: inline-block;
  margin: 13px 20px 13px 0;
`;

const WrapperOfPart = styled.div`
  width: 100%;
  display: flex;
`;

export default ListDetails;
