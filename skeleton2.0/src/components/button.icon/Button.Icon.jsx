import React from 'react';
import './Button.Icon.css';

const ButtonIcon = ({ onClick, iconName }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      <span className={`icon material-icons-outlined`} aria-hidden="true">
        {iconName}
      </span>
    </button>
  );
};

export default ButtonIcon;