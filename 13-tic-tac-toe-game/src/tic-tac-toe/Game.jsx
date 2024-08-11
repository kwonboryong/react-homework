
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
  const currentSquares = gameHistory[gameIndex] || INITIAL_SQUARES;


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
  const handlePlayGame = (index) => () => {
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
