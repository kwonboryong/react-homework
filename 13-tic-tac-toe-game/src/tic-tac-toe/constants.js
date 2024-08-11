// 상수로 설정
// 1. 게임 플레이어 아이콘
// 2. 게임 플레이어 집합
// 3. 게임 플레이어 수
// 4. 게임판(9개)
// 5. 위너 칸을 색칠할 색상
// 6. 게임 승리 조건
// 7. 게임 종료 여부 확인 함수

export const PLAYER = { ONE: '👩‍🚀', TWO: '👽' };

export const PLAYER_LIST = Object.values(PLAYER);

export const PLAYER_COUNT = Object.keys(PLAYER).length;

export const INITIAL_SQUARES = Array(9).fill(null);

export const WINNER_COLOR = '#fff047';

export const WINNER_CONDITION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


export const checkWinner = (squares) => {
  let winnerInfo = null;

  for (const [x, y, z] of WINNER_CONDITION) {
    const winner = squares[x];

    if (winner && winner === squares[y] && winner === squares[z]) {
      winnerInfo = {
        winner,
        condition: [x, y, z],
      };
      break;
    }
  }
  return winnerInfo;
};
