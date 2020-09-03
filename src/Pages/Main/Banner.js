import React from "react";
import styled from "styled-components";
import BannerItem from "./BannerItem";

export default function Banner(props) {
  return (
    <>
      <BannerWrapper padding>
        <BannerList>
          {firstBannerItem.map((el) => (
            <BannerItem data={el} key={el.name} />
          ))}
        </BannerList>
      </BannerWrapper>
      <BannerWrapper margin>
        <BannerList>
          {secondBannerItem.map((el) => (
            <BannerItem data={el} key={el.name} />
          ))}
        </BannerList>
      </BannerWrapper>
      <BannerWrapper>
        <OtherBannerList>
          {lastBannerItem.map((el) => (
            <BannerItem data={el} key={el.name} />
          ))}
        </OtherBannerList>
      </BannerWrapper>
    </>
  );
}

const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${(props) => (props.padding ? "200px" : "")};
  margin-top: ${(props) => (props.margin ? "120px" : "")};
`;

const BannerList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1180px;
`;

const OtherBannerList = styled(BannerList)`
  align-items: flex-end;
`;

const firstBannerItem = [
  {
    title: "BRAND STORY",
    name: "루미너스 뷰티",
    comment: `수분 가득 맑고 건강하게 빛나는 아름다움, 루미너스 뷰티`,
    img:
      "https://www.laneige.com/kr/ko/layout/main/contents-3/__icsFiles/afieldfile/2019/12/02/feature-a-0.jpg",
    imgsize: "321.67px",
  },
  {
    title: "NEW ARRIVALS",
    name: "네오 쿠션_매트",
    comment: "한 번의 터치로 타고난 듯 24시간 완벽하게 커버해주는 매트 쿠션",
    img:
      "https://www.laneige.com/kr/ko/layout/main/contents-3/__icsFiles/afieldfile/2020/06/18/20201617_neo_cushion_foundation_new-arrivals_01.png",
    imgsize: "321.67px",
  },
  {
    title: "AWARD WINNER",
    name: "워터 슬리핑 마스크",
    comment: "2019 글로우픽 컨슈머 뷰티어워드 수면팩 부문 1위",
    img:
      "https://www.laneige.com/kr/ko/layout/main/contents-3/__icsFiles/afieldfile/2019/12/02/feature-a-2.jpg",
    imgsize: "321.67px",
  },
];

const secondBannerItem = [
  {
    title: "AWARD WINNER",
    name: "스테인드 글로우 립밤",
    comment: "2019 상반기 언파 뷰티리뷰위너스 립밤 부문 1위",
    img:
      "https://www.laneige.com/kr/ko/layout/main/contents-4/__icsFiles/afieldfile/2019/12/02/feature-b-0.jpg",
    imgsize: "663px",
  },
  {
    title: "FLAGSHIP STORE",
    name: "MY DELICIOUS THERAPY",
    comment: "세상에 하나뿐인 나만의 '립 슬리핑 마스크' 를 만들어 보세요!",
    img:
      "https://www.laneige.com/kr/ko/layout/main/contents-4/__icsFiles/afieldfile/2019/12/02/feature-b-1.jpg",
    imgsize: "367px",
  },
];

const lastBannerItem = [
  {
    title: "BEST SELLER",
    name: "레이어링 립 바",
    comment: "한 번의 터치로, 리얼 볼륨 그라데이션을 완성하세요.",
    img:
      "https://www.laneige.com/kr/ko/layout/main/contents-4/__icsFiles/afieldfile/2020/01/03/200103-feature-b-2.jpg",
    imgsize: "367px",
  },
  {
    title: "CAMPAIGN",
    name: "레스큐 월터 캠페인",
    comment: "라네즈는 물을 지키고, 깨끗하게 하는 일을 함께합니다.",
    img:
      "https://www.laneige.com/kr/ko/layout/main/contents-4/__icsFiles/afieldfile/2019/12/02/feature-b-3.jpg",
    imgsize: "663px",
  },
];
