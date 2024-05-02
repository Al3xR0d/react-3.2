import React from 'react';

import './Header.css';
import Rocket from '../images/rocket.png';

const Header = () => {
  return (
    <h1 className="head">
      <img src={Rocket} className="rocket" />
      <span className="to">to</span>
      <span className="do">do</span>
    </h1>
  );
};

export { Header };
