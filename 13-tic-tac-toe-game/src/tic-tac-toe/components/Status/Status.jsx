import { OneOfPlayerType } from '@/tic-tac-toe/types/type.d';
import { bool } from 'prop-types';
import S from './Status.module.css'
import { PLAYER } from '@/tic-tac-toe/constants';

// 타입 검사
Status.propTypes = {
  winner: OneOfPlayerType,
  nextPlayer: OneOfPlayerType.isRequired,
  isDraw: bool
};

function Status({ winner, nextPlayer, isDraw = false }) {

  let statusMessage = `다음 플레이어: ${nextPlayer}`;

  if(winner) {
    // statusMessage = `승자! ${winner}`;

    if(winner === PLAYER.ONE) {
      statusMessage = '지구인이 지구를 지켰습니다!';
    } else {
      statusMessage = '외계인이 지구를 침공했습니다!';
    }
  }

  if(isDraw) {
    statusMessage = '비겼습니다!';
  }

  return (
    <h2 className={S.component}>
      {statusMessage}
    </h2>
  )
}

export default Status;
