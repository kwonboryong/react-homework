# 틱택토 게임(Tic-Tac-Toe Game)

<br/>

![반응 속도 테스트](https://github.com/user-attachments/assets/16a0cad2-ed14-4cb4-8a46-c085fd9795ce)

<br/><br/>

## 컴포넌트 관계도
- 컴포넌트 관계 이해를 쉽게 하기 위해 간단하게 관계도를 만들어서 이해하려고 노력했습니다.
- Reset 버튼을 추가하여 게임 결과 표시 후 게임을 초기화할 수 있도록 하였습니다.

![틱택토 컴포넌트 관계도](https://github.com/user-attachments/assets/c4e1bd3f-e80f-4850-8a26-69bab0f25581)

<br/>

## 에러
### 현상
- 플레이어 승리 후 다른 칸을 누르면 GAME OVER 알림창이 뜨고 아래와 같은 에러가 떴습니다. 
![에러](https://github.com/user-attachments/assets/1c76ef2d-7f26-4ac9-9acc-e8a2c15caa19)

### 원인
- `currentSquares`에 `undefined`가 들어가면 filter 메서드를 호출할 수 없어서 나는 에러인 것 같았습니다.

<br/>

### 해결
- `currentSquares`에 `undefined`가 들어가지 않도록 `gameHistory[gameIndex]`가 `undefined`일 경우 기본값으로 `INITIAL_SQUARES`을 사용하도록 하였습니다.

<br/>

### 수정 전
```
  const currentSquares = gameHistory[gameIndex];
```

### 수정 후
```
  const currentSquares = gameHistory[gameIndex] || INITIAL_SQUARES;
```

<br/><br/><br/>

## 느낀점
- 만들면서 컴포넌트 구조와 props 전달 및 사용에 대해 익숙해진 것 같습니다. <br/> 타입 검사와 상수 사용도 이해는 못하고 따라치기만 하던 전과는 달리 생각을 하면서 사용하게 되었습니다.
  
- 많이 어려워서 여전히 코드를 봐야 이해가 가는 부분도 많아서 더 반복해서 짜보려고 합니다. 

<br/><br/><br/>

## 피드백
- 

<br/><br/>
