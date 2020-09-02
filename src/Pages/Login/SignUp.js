import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <Signup>
      <SignUpHeader>뷰티포인트 X 라네즈 회원가입</SignUpHeader>
      <SignUpMain>
        <section>
          <h1>아모레퍼시픽 통합멤버십 회원가입을 환영합니다!</h1>
          <h3>
            아모레퍼시픽 통합멤버십(뷰티포인트)에 가입하시면 라네즈 외 모든
            브랜드 온/오프 매장에서 상품을 구매 할 때마다 현금처럼 사용할 수
            있는 포인트 적립과 사용 등 다양한 혜택을 받으실 수 있습니다.
          </h3>
        </section>
        <section>
          <Article>
            <input
              type="text"
              name="name"
              placeholder="이름(실명으로 입력해 주세요)"
            />
          </Article>
          <ArticleBirth>
            <input
              type="text"
              name="birth"
              placeholder="생년월일8자리(ex.19980905)"
            />
            <label>
              <input type="radio" name="gender" />
              남자
            </label>
            <label>
              <input type="radio" name="gender" />
              여자
            </label>
          </ArticleBirth>
          <ArticlePhone>
            <select>
              <option>통신사 선택</option>
              <option value="skt">SKT</option>
              <option value="ktf">KT</option>
              <option value="lgu">LG U+</option>
              <option value="skm">SKT 알뜰폰</option>
              <option value="ktm">KT 알뜰폰</option>
              <option value="lgm">LG U+ 알뜰폰</option>
            </select>
            <input
              type="number"
              name="phoneNumber"
              placeholder="전화번호 입력"
            />
          </ArticlePhone>
          <p className="idAlert">
            * 아이디 미입력시 휴대폰번호로 가입되며 가입완료후 변경 불가합니다.
          </p>
          <Article>
            <input type="text" placeholder="아이디(4~12자 영문/대ㆍ소문자)" />
          </Article>
          <ArticleCol>
            <MakePassword>
              <CenterPasswordLabel>
                <input type="radio" name="makePassword" />
                <SignUpCheck />
                <p>비밀번호 직접입력</p>
              </CenterPasswordLabel>

              <CenterPasswordLabel>
                <input type="radio" name="makePassword" />
                <SignUpCheck />
                <p>비밀번호 자동발급</p>
              </CenterPasswordLabel>
            </MakePassword>
            <PasswordContainor>
              <input
                type="password"
                placeholder="비밀번호는 6~16자 영문 대소문자,숫자,특수문자 중 최소 2가지 이상을 입력해야 합니다."
              />
              <input
                type="password"
                className="long"
                placeholder="비밀번호 확인"
              />
            </PasswordContainor>
          </ArticleCol>
          <ArticleCol>
            <AllAgree>
              <input type="checkbox" id="termsOfUse" />
              <label htmlFor="termsOfUse">모든 약관 동의</label>
            </AllAgree>
            <TermsList>
              <Explanation>
                아래 모든 약관 (필수/선택 포함) 및 광고성 정보수신 동의 내용을
                확인하고 전체 동의합니다. ※ 선택 항목에 대한 동의를 거부하더라도
                회원가입에 영향을 미치지 않습니다.
              </Explanation>
              <SignUpSubtitile>
                아모레퍼시픽 통합 멤버십 뷰티포인트 회원약관
              </SignUpSubtitile>
              <label>
                <input type="checkbox" />
                [필수]뷰티포인트 서비스 이용약관
              </label>
              <label>
                <input type="checkbox" />
                [필수]개인정보 이용 및 수집에 대한 동의
              </label>
              <label>
                <input type="checkbox" />
                [선택]개인정보 제3자 제공 동의
              </label>
              <label>
                <input type="checkbox" />
                [선택]국외 이전 동의
              </label>
              <SignUpSubtitile>
                광고성 정보 수신 동의
                <span>쇼핑 혜택, 이벤트 소식을 받아보세요</span>
              </SignUpSubtitile>
              <label>
                <input type="checkbox" />
                [선택]뷰티포인트 문자 수신 동의
              </label>
              <label>
                <input type="checkbox" />
                [선택]온라인 사이트 문자 수신 동의
              </label>
              <SignUpSubtitile>개인정보 처리 위탁에 대한 안내</SignUpSubtitile>
              <Explanation>
                ※ 아모레퍼시픽은 서비스 향상 및 원활한 전산 처리 등을 위하여
                이용자의 개인정보 관리를 외부 전문업체에 위탁하고 있습니다.
                아모레퍼시픽의 업무를 위탁받는 자 및 업무의 내용은 아모레퍼시픽
                홈페이지
                https://www.beautypoint.co.kr/footer/privacy/personal.html 에서
                확인 하실 수 있습니다.
              </Explanation>
            </TermsList>
          </ArticleCol>
          <Link to="?">
            <SignUpButton agree="true">본인인증 및 회원가입</SignUpButton>
          </Link>
        </section>
      </SignUpMain>
    </Signup>
  );
}

const Signup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  font-family: "MalgunGothic";
`;

const SignUpHeader = styled.div`
  border: 1px solid #d2d2d2;
  width: inherit;
  height: 61px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  color: #082b5e;
  padding-top: 23px;
  background-color: #f3f3f3;
`;

const SignUpMain = styled.main`
  width: 460px;

  h1 {
    font-size: 30px;
    margin-top: 40px;
  }

  h3 {
    font-size: 15px;
    margin-top: 10px;
    font-weight: 400;
    letter-spacing: 0.8px;
  }

  p {
    margin-bottom: 15px;
  }

  .idAlert {
    font-size: 14px;
    font-weight: 700;
  }

  section {
    margin-bottom: 70px;
  }
`;

const Article = styled.article`
  display: flex;
  margin-bottom: 15px;

  input[type="text"],
  input[type="password"],
  input[type="number"],
  select {
    width: 100%;
    height: 54px;
    font-size: 16px;
    border: 1px solid #d2d2d2;
    padding-left: 10px;
    &::placeholder {
      font-size: 16px;
    }
  }
`;

const ArticleCol = styled(Article)`
  flex-direction: column;
  margin-bottom: 15px;
`;

const ArticleBirth = styled(Article)`
  input[type="text"] {
    width: 100%;
    flex-shrink: 2;
    margin-right: 20px;
  }

  label {
    flex-shrink: 4;
    width: 100%;
    border: 1px solid #d2d2d2;
    padding-top: 20px;

    input {
      position: relative;
      top: -2px;
    }
  }
`;

const ArticlePhone = styled(Article)`
  select {
    width: 100%;
    flex-shrink: 2;
    margin-right: 20px;
  }

  input {
    width: 100%;
    flex-shrink: 1;
  }
`;

const MakePassword = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SignUpCheck = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 3px;
  background-image: url("https://media.vlpt.us/post-images/devzunky/1e15b780-344c-11ea-8125-252810464e18/layers.png");
`;

const CenterPasswordLabel = styled.label`
  position: relative;
  display: flex;
  p {
    position: relative;
    top: 6px;
    height: 25px;
    font-size: 15px;
    padding-left: 10px;
  }
`;

const PasswordContainor = styled.div`
  input[type="password"] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 15px;
  }
`;

const AllAgree = styled.div`
  border: 1px solid #d2d2d2;
  font-size: 21px;
  color: #082b5e;
  padding: 10px;
`;

const TermsList = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 15px;
    color: #3b3b3b;
    height: 27px;
    margin: 5px 0;
  }
`;

const Explanation = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #707070;
  letter-spacing: 0.8px;
  line-height: 20px;
`;

const SignUpSubtitile = styled.h2`
  font-size: 15px;
  font-weight: bold;
  color: #3b3b3b;
  margin-bottom: 10px;
  padding-top: 20px;
  span {
    font-size: 14px;
    color: #707070;
    padding-left: 3px;
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 52px;
  font-size: 20px;
  color: white;
  margin-bottom: 40px;
  background-color: ${(props) => (props.agree ? "#555555" : "#082B5E")};
`;
