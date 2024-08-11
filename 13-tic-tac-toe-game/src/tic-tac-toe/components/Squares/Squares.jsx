import { func } from 'prop-types';
import Square from './../Square/Square';
import { OneOfPlayerListType, WinnerInfoType } from '@/tic-tac-toe/types/type.d';
import S from './Squares.module.css';
import { WINNER_COLOR } from '@/tic-tac-toe/constants';

// 타입 검사
Squares.propTypes = {
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
  onPlay: func,
};


function Squares({ squares, winnerInfo, onPlay }) {
  return (
    <div className={S.component}>
      {/* 칸 색상 변경 */}
      {squares.map((square, index) => {
        const winnerStyle = {
          backgroundColor: null,
        };

        if (winnerInfo) {
          const [x, y, z] = winnerInfo.condition;

          if (index === x || index === y || index === z) {
            winnerStyle.backgroundColor = WINNER_COLOR;
          }
        }

        return (
          <Square key={index} style={winnerStyle} onPlay={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
