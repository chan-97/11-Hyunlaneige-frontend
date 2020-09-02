import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import New from "./New";
import Best from "./Best";

const useHover = () => {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);
  return [ref, value];
};

function Item({
  isNew,
  isBest,
  image,
  hashFirst,
  hashSecond,
  productName,
  hover,
}) {
  const [hoverRef, isHoverd] = useHover();

  return (
    <ItemOuter>
      <ItemImg ref={hoverRef} src={isHoverd ? hover : image} />
      <Mark>
        {isNew === "true" ? <New /> : null}
        {isBest === "true" ? <Best /> : null}
      </Mark>
      <HashWrapper>
        <HashFirst>{hashFirst}</HashFirst>
        <HashSecond>{hashSecond}</HashSecond>
      </HashWrapper>
      <ProductName>{productName}</ProductName>
    </ItemOuter>
  );
}

const ItemOuter = styled.li`
  width: 280px;
  height: 444px;
  margin: 0 10px 20px 10px;
  padding-bottom: 8px;
  position: relative;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 336px;
  margin-bottom: 10px;
`;

const Mark = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;

const HashWrapper = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HashFirst = styled.span`
  margin: 0 3px;
  font-size: 0.875rem;
  font-weight: lighter;

  &::before {
    content: "#";
  }
`;

const HashSecond = styled.span`
  margin: 0 3px;
  font-size: 0.875rem;
  font-weight: lighter;

  &::before {
    content: "#";
  }
`;

const ProductName = styled.div`
  padding: 0 0.5em 1em 0.5em;
  margin-top: 4px;
  text-align: center;
  font-size: 1.0625rem;
`;

export default Item;
