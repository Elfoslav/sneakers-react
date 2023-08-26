import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  iconText?: string;
  text: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { type, icon, iconText, text, onClick } = props;

  return (
    <button type={type} className="btn btn-primary" onClick={onClick}>
      {icon && <span className="btn-icon">{icon}</span>}
      {iconText && <span className="btn-icon">{iconText}</span>}
      <span className="btn-text">{text}</span>
    </button>
  );
}

export default Button;
