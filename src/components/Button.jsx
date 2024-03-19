/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

function Button({ children, action, type = 'button' }) {
  const style = css`
    background: linear-gradient(90deg, #1cb5e0 0%, #000851 60%);
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    outline: none;
    padding: 8px 16px;
    text-align: center;
    margin-bottom: 6px;

    &:hover,
    &:focus {
      background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
    }
    &:active {
      background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
    }
  `;

  return (
    <button css={style} onClick={action} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  action: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
