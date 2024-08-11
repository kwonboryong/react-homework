import Squares from './../Squares/Squares';
import Status from './../Status/Status';
import S from './Board.module.css';
import { bool, func } from 'prop-types';
import { OneOfPlayerListType, OneOfPlayerType, WinnerInfoType } from '@/tic-tac-toe/types/type.d';

// 타입 검사
Board.propTypes = {
  squares: OneOfPlayerListType,
  winnerInfo: WinnerInfoType,
  nextPlayer: OneOfPlayerType.isRequired,
  onPlay: func,
  isDraw: bool.isRequired,
};


function Board({ squares, winnerInfo, nextPlayer, onPlay, isDraw }) {
  return (
    <div className={S.component}>
      <Status 
        winner={winnerInfo} 
        nextPlayer={nextPlayer} 
        isDraw={isDraw} 
      />

      <Squares 
        squares={squares} 
        winnerInfo={winnerInfo} 
        onPlay={onPlay} 
      />
    </div>
  );
}

export default Board;
