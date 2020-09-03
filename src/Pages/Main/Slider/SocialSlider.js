import React, { useState } from "react";
import styled from "styled-components";

export default function SocialSlider() {
  const slides = data.length;
  const getWidth = 210;
  const [translate, setTranslate] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    if (activeIndex !== parseInt(slides / 5)) {
      setActiveIndex(activeIndex + 1);
      setTranslate((activeIndex + 1) * getWidth * 4);
    }
  };

  const prevSlide = () => {
    if (activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
      setTranslate((activeIndex - 1) * getWidth * 4);
    }
  };

  return (
    <Wrapper>
      <Arrow onClick={prevSlide}>
        <ArrowImg src="https://assets1.pxlecdn.com/assets/embed/glyph/prev@2x-831196d6c5ac3c7768872fb15b4a6b09ba6ed9d46a4f4456d337deaf54f537a3.png" />
      </Arrow>
      <SlideWrapper>
        <Content
          translate={translate}
          transition="0.45"
          widthsize={getWidth * slides}
        >
          {data.map((el, idx) => (
            <Photo url={el} key={idx} />
          ))}
        </Content>
      </SlideWrapper>
      <Arrow onClick={nextSlide}>
        <ArrowImg src="https://assets1.pxlecdn.com/assets/embed/glyph/next@2x-8dd64ee649b23a16e84d9d73cee03530becaa3adca45d7ccc70b9fe64333da30.png" />
      </Arrow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 1040px;
  height: 200px;
  overflow: hidden;
`;

const Content = styled.div`
  width: ${(props) => props.widthsize}px;
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  display: flex;
`;

const Photo = styled.div`
  width: 200px;
  height: 200px;
  margin: 0px 5px;
  background: ${({ url }) => `url(${url}) no-repeat center`};
  background-size: cover;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const ArrowImg = styled.img`
  width: 12px;
  height: 24px;

  &:focus {
    outline: 0;
  }
`;

const data = [
  "https://static.pxlecdn.com/photos/376145150/medium/76145813f08fba9fb801.jpg",
  "https://static.pxlecdn.com/photos/376093414/medium/8658b5fa581e3dc2cf8c.jpg",
  "https://static.pxlecdn.com/photos/376046235/medium/1e98a6c58c943dfc2144.jpg",
  "https://static.pxlecdn.com/photos/371122869/medium/5ae7e2a11685f97c9a74.jpg",
  "https://static.pxlecdn.com/photos/373546300/medium/c2f4222997991aa8e93f.jpg",
  "https://static.pxlecdn.com/photos/362096808/medium/e7017ab856b7e4e9f432.jpg",
  "https://static.pxlecdn.com/photos/361618459/medium/04176baaa8536759f297.jpg",
  "https://static.pxlecdn.com/photos/359414441/medium/f77acacd8bcf4761a9fb.jpg",
];
