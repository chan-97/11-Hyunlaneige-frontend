import React from "react";
import styled from "styled-components";

export default function Item(props) {
  const { enName, name, review, reviewId, img } = props.data;

  return (
    <BestItem>
      <ImgBox>
        <img alt={enName} src={img} />
      </ImgBox>
      <Title>{enName}</Title>
      <SubTitle>{name}</SubTitle>
      <Comment>
        {review}
        <ReviewId>{reviewId}</ReviewId>
      </Comment>
    </BestItem>
  );
}

const BestItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 393.33px;
  height: 685px;
  padding: 20px;
`;

const ImgBox = styled.div`
  width: 320px;
  height: 384px;

  img {
    width: 100%;
  }
`;

const Title = styled.div`
  margin-top: 30px;
  color: #4477be;
`;

const SubTitle = styled.div`
  margin: 9.5px 0 45.5px;
  font-size: 19px;
  color: #2b2b2b;
`;

const Comment = styled.div`
  width: 235px;
  font-size: 16px;
  color: #5f5f5f;
  line-height: 25.6px;
  word-break: keep-all;
`;

const ReviewId = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;
