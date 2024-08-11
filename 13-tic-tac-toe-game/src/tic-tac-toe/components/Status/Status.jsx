import { OneOfPlayerType } from '@/tic-tac-toe/types/type.d';
import { bool } from 'prop-types';
import S from './Status.module.css'

// 타입 검사
Status.propTypes = {
  winner: OneOfPlayerType.isRequired,
  nextPlayer: OneOfPlayerType.isRequired,
  isDraw: bool
};

function Status({ winner, nextPlayer, isDraw = false }) {

  let statusMessage = `다음 플레이어: ${nextPlayer}`

  if(winner) {
    statusMessage = `승자! ${winner}`
  }

  if(isDraw) {
    statusMessage = `비겼습니다!`
  }

  return (
    <h2 className={S.component}>
      {statusMessage}
    </h2>
  )
}

export default Status;
