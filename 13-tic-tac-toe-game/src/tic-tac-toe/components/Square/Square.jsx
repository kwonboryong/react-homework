import { func, node } from 'prop-types';
import S from './Square.module.css';

// 타입 검사
Square.propTypes = {
  children: node,
  onPlay: func,
};

function Square({ children, onPlay, ...restProps }) {
  return (
    <button className={S.component} onClick={onPlay} {...restProps}>
      {children}
    </button>
  );
}

export default Square;
