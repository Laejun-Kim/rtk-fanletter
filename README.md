# [내일배움캠프][개인 프로젝트] - K/DA Fanletter Web

![logo](https://velog.velcdn.com/images/laejunkim/post/33cd81bc-5387-49f6-8ef5-bb79bb5adff0/image.webp)

## 프로젝트 확인하기

https://my-fan-letter.vercel.app/

## 프로젝트 소개

리액트를 이용하여 팬레터 사이트를 만들때

먼저 전역 state관리를 전혀 하지 않은 채로 props-drilling을 경험하고,

useContext를 이용하여 이를 해결한뒤,

마지막으로 Redux까지 이용하여 세가지 버전의 웹사이트를 만들어 보는 프로젝트

## 개발 기간

- 23.11.10 - 23.11.20

## 개발 환경

- `JavaScript`
- `React`
- `styled-components`
- `redux`

## 주요 기능

- 팬레터 열람/등록/수정/삭제

- 상황에 맞는 오류/확인 메시지 Modal 출력

- 각각의 축약된 팬레터 클릭시 상세보기 페이지로 이동

- Local Storage 활용(redux 버전 한정), 새로고침해도 기존의 내용이 날아가지 않음

- 기초적인 input validation

## 주요 컴포넌트 구성

- App.jsx
- Header.jsx
- Home.jsx - 메인 페이지를 구성하는 컴포넌트
- Detail.jsx - 각 팬레터의 상세를 확인하는 디테일 페이지를 구성하는 컴포넌트
- Letters.jsx - 팬레터 모음을 표시하는 컴포넌트
- EachLetter.jsx - 각각의 팬레터를 표시하는 컴포넌트
- SubmitLetter.jsx - 사용자 입력을 처리하는 컴포넌트
- ReusableButton.jsx - 버튼이 필요한 모든 곳에서 사용가능한 공용 버튼 컴포넌트
- ReusableModal.jsx - 모달이 필요한 모든 곳에서 사용가능한 공용 모달 컴포넌트

## 이전 버전보다 나아진 점(추가!!)

- 이젠 글을 쓰면 자동으로 자신의 닉네임이 표시돼요
- 이제 모든 글은 최근 글일수록 상단에 노출 돼요
- 이제 마이페이지에서 자신의 닉네임과 프로필 사진을 수정할 수 있어요
- uuid 사용을 폐기하고 대신 nanoid를 사용하여 보다 빠르고 안전해요
- react-toastify 도입으로 적절한 알림을 받을수 있어요
