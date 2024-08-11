import { func } from 'prop-types';
import { OneOfPlayerListType, WinnerInfoType } from '@/tic-tac-toe/types/type.d';
import { WINNER_COLOR } from '@/tic-tac-toe/constants';
import Square from './../Square/Square';
import S from './Squares.module.css';

// 타입 검사
Squares.propTypes = {
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
  onPlay: func
};


function Squares({ squares, winnerInfo, onPlay }) {

  return (
    <div className={S.component}>
      
      {/* 칸 색상 변경 */}
      {squares.map((square, index) => {

        // 배경 색상
        const winnerStyles = {
          backgroundColor: null,
        };

        if (winnerInfo) {
          // 게임 승자의 조건 저장하기
          const [x, y, z] = winnerInfo.condition;

          // 그럼 승리한 스퀘어(말판) 색칠하기
          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNER_COLOR;
          }
        }

        return (
          <Square key={index} style={winnerStyles} onPlay={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
