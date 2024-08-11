import { func, node } from 'prop-types';
import S from './Square.module.css';

// 타입 검사
Square.propTypes = {
  children: node,
  onPlay: func
};


function Square({ children, onPlay, ...restProps }) {
  
  // 이미 말이 있는 칸에는 더 이상 액션 X
  let isDisabled = !!children;

  return (
    <button
      className={S.component}
      onClick={onPlay}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Square;
