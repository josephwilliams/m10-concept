import React from 'react';
import classnames from 'classnames'
import {
  Link,
} from 'react-router-dom';
import '../styles/Button.css'

const Button = ({
  buttonText,
  linkTo,
  disabled,
  onClick,
}) => (
  <Link
    className={classnames(
      'buttonWrapper',
      disabled && 'buttonWrapperDisabled',
    )}
    to={!disabled && linkTo}
    onClick={onClick}
  >
    {buttonText}
  </Link>
);

export default Button;
