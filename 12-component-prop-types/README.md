# Vite React 템플릿

<br/>

### 폴더 구조

![템플릿](https://github.com/user-attachments/assets/e8b0eb7d-5384-43b7-9ddd-3d3124bc5c1a)

- public 폴더
- src 폴더
  - components ➡ 개별 컴포넌트
  - pages ➡ 페이지 컴포넌트
  - styles ➡ 스타일링 파일
 
- vite-react-scaffolding ➡ 제작한 vite-react 템플릿을 degit 명령으로 프로젝트 스캐폴딩

<br/>

### 설치
- Vite
- ESLint
- Prettier

<br/><br/>

### 느낀점

- 지금껏 환경 설정을 할 때는 하라는 대로 무작정 따라하기만 했지 코드 한 줄 한 줄 보면서 이해해본 적은 없었는데, 이번 과제로 직접 설치해보니 파일들의 기능과 명령어들을 조금 더 이해할 수 있게 되었습니다. 

<br/>

---

<br/>

### 문제점 💥
- NPM 패키지를 설치할 때 발생하는 피어 종속성(peerDependencies) 모듈 문제 <br/>
👉 ```eslint-plugin-react-hooks``` 패키지의 피어 종속성인 eslint를 현재 8 버전까지만 지원하기 때문에 발생
```
 WARN  Issues with peer dependencies found
.
└─┬ eslint-plugin-react-hooks 4.6.2
  └── ✕ unmet peer eslint@"^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0": found 9.8.0    
```

<br/>

### 해결 방법 ✊
피어 종속성 설치 문제는 설치하려는 패키지의 피어 종속성 버전이 허용 가능한 범위를 벗어난 경우에 발생한다.

<br/>

**해결 방법 1** <br/>
피어 종속성을 무시하고 설치한다. <br/>
```pnpm add eslint-plugin-react-hooks --legacy-peer-deps```

<br/>

**해결 방법 2** <br/>
eslint-plugin-react-hooks 패키지 관리자가 eslint 종속성 버전을 9까지 포함할 때까지 기다린다.

<br/>

**해결 방법 3** <br/>
eslint 패키지 9버전 뿐만 아니라, 8버전도 설치한다. (권장하지 않음)

<br/><br/>
