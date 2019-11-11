import React from 'react';
import classnames from 'classnames'
import {
  Link,
} from 'react-router-dom';
import './Button.css'

const Button = ({
  buttonText,
  linkTo,
  disabled,
}) => (
  <Link
    className={classnames(
      'buttonWrapper',
      disabled && 'buttonWrapperDisabled',
    )}
    to={!disabled && linkTo}
  >
    {buttonText}
  </Link>
);

export default Button;
