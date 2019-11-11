import React from 'react';
import classnames from 'classnames'
import './Button.css'

const Button = ({
  buttonText,
  onClick,
  disabled,
}) => (
  <div
    className={classnames(
      'buttonWrapper',
      disabled && 'buttonWrapperDisabled',
    )}
    onClick={onClick}
  >
    {buttonText}
  </div>
);

export default Button;
