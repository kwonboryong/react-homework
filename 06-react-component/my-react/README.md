## 아토미 컴포넌트 구현

<br/>

## 📌 Figma 시안 제작

[Figma 시안](https://www.figma.com/design/HNZN3IHM0oOe506HB2cZE9/%EC%95%84%ED%86%A0%EB%AF%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%94%BC%EA%B7%B8%EB%A7%88-%EC%8B%9C%EC%95%88?node-id=0-1&t=UjBzWpt8LzkXq4TV-1)

![아토미 컴포넌트 피그마 시안](https://github.com/user-attachments/assets/32d548ac-f150-48d3-995a-758f61d8b03e)

<br/>

- figma가 익숙하지 않아 코드 구현보다 시간이 더 오래 걸린 것 같습니다. <br/>
그래도 다양한 것을 배우고 할 수 있게 된 것 같아서 좋았습니다. 

<br/><br/><br/>

## 📌 리액트 구현

![아토미 컴포넌트 구현](https://github.com/user-attachments/assets/d01c6658-5e04-49fd-b97d-32ab3ed0b5e9)

<br/><br/>


## 구현 과정

<br/>

### 환경 셋팅

- 환경 구성이 가장 힘들고 시간이 오래 걸려서 과제를 할 수 있을지 걱정했습니다.
결국 React와 vite를 pnpm으로 설치하여 사용했습니다. 

<br/>


### 폴더 구조
- 폴더는 크게 3개로 구성하였습니다.
1. public - assete 👉 컴포넌트에 사용된 이미지
2. components 👉 컴포넌트 파일
3. styles 👉 컴포넌트 CSS

<br/>

- Profile.jsx에 개별 컴포넌트를 만들었습니다. <br/>
- ProfileList.jsx에서는 개별 컴포넌트들을 모은 컴포넌트를 생성하고, 속성들을 설정하였습니다. <br/>
- ProfileList.jsx의 컴포넌트를 main.jsx에 렌더링하였습니다. <br/>

<br/>

### 느낀점 및 문제
1. **JSX**
- JSX를 잘 사용한 건지 확신이 가지 않았습니다. <br/>
- 또한 JSX를 타입 스크립트와 사용해보려고 했으나 컴포넌트로 나누는 것에 치중해서 사용하지 못했습니다. <br/>
다음 과제에서는 꼭 타입 스크립트와 사용해보고 싶습니다.
<br/>

2. **폰트**
- Pretendard 폰트를 적용하고 싶었으나 HTML 파일에서 CDN으로 연결하는 방식과 CSS 파일에서 import 해오는 방식이 되지 않아서 연결하지 못했습니다.

<br/>

3. **컴포넌트 구조**
- 과제를 하며 직접 파일을 생성하고 컴포넌트를 만들어보니 컴포넌트 구조에 대해 이해할 수 있었습니다. <br/>
한 파일에 무작정 다 넣어서 구현하던 방식보다 훨씬 편하고 깔끔하다는 것을 느꼈습니다. <br/>
모두 이해했다고는 할 수 없지만 어렴풋이 알고 있던 것을 확실히 이해하게 되어 좋았습니다


<br/><br/>
