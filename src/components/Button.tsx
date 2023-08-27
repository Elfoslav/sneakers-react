import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  iconText?: string;
  text: string;
  size?: 'sm';
  outline?: boolean;
  active?: boolean;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { type, icon, iconText, text, size, outline, active, onClick } = props;

  const getClass = () => {
    let str = 'btn btn-primary';

    if (size) {
      str += ` btn-${size}`;
    }

    if (outline) {
      str += ' btn-outline';
    }

    if (active) {
      str += ' btn-active';
    }

    return str;
  }

  return (
    <button
      type={type}
      className={getClass()}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {iconText && <span className="btn-icon">{iconText}</span>}
      <span className="btn-text">{text}</span>
    </button>
  );
}

export default Button;
