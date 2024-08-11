import { func, node } from 'prop-types';
import S from './Square.module.css';

// 타입 검사
Square.propTypes = {
  children: node,
  onPlay: func,
};

function Square({ children, onPlay, ...restProps }) {
  return <button></button>;
}

export default Square;
