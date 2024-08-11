// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Game 컴포넌트)
// --------------------------------------------------------------------------
// 상수로 설정
// 1. 게임 플레이어 아이콘
// 2. 게임 플레이어 집합
// 3. 게임 플레이어 수
// 4. 위너 칸을 색칠할 색상
// 5. 게임판(9개)
// 6. 게임 승리 조건
// 7. 게임 종료 여부 확인 함수

// - [x] 구현할 게임의 마크업을 분석해서 하위 컴포넌트 트리를 구성합니다. (컴포넌트 추출)

// - [x] Game 컴포넌트의 상태를 어떻게 공유해야 할 지 고민해야 합니다.
// - [x] 핵심 포인트는 게임의 말판 상태가 일일이 기록되어야 합니다. (즉, 중첩된 배열로 상태 관리 필요)
// - [x] Game 컴포넌트의 상태를 Board와 History에 공유합니다.
// --------------------------------------------------------------------------

import { useState } from 'react';
import {
  PLAYER,
  PLAYER_COUNT,
  INITIAL_SQUARES,
  checkWinner,
} from './constants';
import Board from './components/Board/Board';
import History from './components/History/History';
import Reset from './components/Reset/Reset';
import './styles/main.css';
import S from './Game.module.css';

function Game() {

  // 게임판(9개) 상태 관리
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);

  // 게임 진행 순서 상태 관리
  const [gameIndex, setGameIndex] = useState(0);

  // 현재 게임
  const currentSquares = gameHistory[gameIndex];


  // 첫 번째 플레이어
  const playerOneTurn =
    currentSquares.filter(Boolean).length % PLAYER_COUNT === 0;

  // 다음 플레이어 선정
  const nextPlayer = playerOneTurn ? PLAYER.ONE : PLAYER.TWO;


  // 이긴 판
  const winnerInfo = checkWinner(currentSquares);

  // 비긴 판
  const isDraw = !winnerInfo && currentSquares.every(Boolean);


  // 게임 진행 함수
  // - 특정 위치에 사용자가 말을 놓을 때 호출
  const handlePlayGame = (index) => {
    // 다음 게임 인덱스
    const nextGameIndex = gameIndex + 1;
    setGameIndex(nextGameIndex);

    // 게임 종료 시
    if (winnerInfo) {
      return alert('GAME OVER');
    }


    // 다음 상태의 게임판을 정의
    // - 현재 게임판 정보 저장
    // - 플레이어의 이동을 기록, 게임의 다음 상태를 정의
    const nextSquares = currentSquares.map((square, i) => {
      return i === index ? nextPlayer : square;
    });


    // 게임의 각 턴마다의 상태를 저장
    // - 게임의 히스토리를 되돌리기 위함
    const nextGameHistory = [
      ...gameHistory.slice(0, nextGameIndex),
      nextSquares,
    ];

    setGameHistory(nextGameHistory);
  };


  // 시간 이동 함수
  const handleTimeTravel = (index) => {
    // 원하는 인덱스의 게임으로 업데이트
    setGameIndex(index);
  };

  // 리셋 함수
  const handleReset = () => {
    setGameHistory([INITIAL_SQUARES]);
    setGameIndex(0);
  };


  return (
    <div className={S.component}>
      <Board
        squares={currentSquares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlayGame}
        isDraw={isDraw}
      />

      <History
        gameHistory={gameHistory}
        gameIndex={gameIndex}
        onTimeTravel={handleTimeTravel}
      />

      <Reset onReset={handleReset} />
    </div>
  );
}

export default Game;
