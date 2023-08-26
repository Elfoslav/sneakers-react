import React from 'react';

interface CloseIconProps {
  size?: number,
  onClick?: () => void;
}

function CloseIcon({ size, onClick }: CloseIconProps) {
  const iconStyle: React.CSSProperties = {
    display: 'inline-block',
    cursor: 'pointer',
  };

  return (
    <span className="close-icon" style={iconStyle} onClick={onClick}>
      <img src="/icons/close.svg" width={size} alt="close" />
    </span>
  );
}

export default CloseIcon;
