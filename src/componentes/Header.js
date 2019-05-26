import React from 'react';

const Header = (props) => {
  return (
    <div>
      <nav className="nav-wrapper teal darken-1">
        <div className="brand-logo">{props.titulo}</div>
      </nav>
    </div>
  );
};

export default Header;