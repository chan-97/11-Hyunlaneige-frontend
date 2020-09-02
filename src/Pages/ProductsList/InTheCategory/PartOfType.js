import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./dataOfPart";

function PartOfType() {
  const [partsList, setPartsList] = useState([]);

  useEffect(() => {
    setPartsList(data.dataOfType);
  }, []);

  return (
    <PartOfTypeOuter>
      <TitleOfTypes>유형별</TitleOfTypes>
      <ListOfTypes>
        {partsList.map((part) => (
          <Types key={part.id}>{part.part}</Types>
        ))}
      </ListOfTypes>
    </PartOfTypeOuter>
  );
}

const PartOfTypeOuter = styled.ul`
  width: 33.3%;
  margin: 0 30px 12px 0;
`;

const TitleOfTypes = styled.li`
  height: 27px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  border-bottom: 1px solid #eaeaea;
`;

const ListOfTypes = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Types = styled.li`
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  color: #444444;
`;

export default PartOfType;
