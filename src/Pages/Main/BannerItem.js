import React from "react";
import styled from "styled-components";

export default function BannerItem(props) {
  const { title, name, comment, img, imgsize } = props.data;

  return (
    <Wrapper>
      <Title>
        <span>{title}</span>
      </Title>
      <Content size={imgsize}>
        <img alt={name} src={img} />
        <Name>{name}</Name>
        <Comment>{comment}</Comment>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Title = styled.div`
  position: relative;
  width: 45px;

  span {
    position: absolute;
    top: 0px;
    right: 25%;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    color: #4477be;
    letter-spacing: 0.8px;
  }
`;

const Content = styled.div`
  width: ${(props) => props.size};
  height: 100%;

  img {
    width: 100%;
  }
`;

const Name = styled.div`
  margin: 17px 0 6px 0;
  font-size: 19px;
  color: #2b2b2b;
`;

const Comment = styled.div`
  width: 100%;
  font-size: 15.5px;
  color: #5f5f5f;
  line-height: 1.6;
  font-weight: 300;
  word-break: keep-all;
`;
