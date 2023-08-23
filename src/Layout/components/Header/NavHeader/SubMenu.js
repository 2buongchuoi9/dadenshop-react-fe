import classNames from 'classnames/bind';
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri';

import style from './NavHeader.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const cl = classNames.bind(style);

function SubMenu({ to, text, children }) {
  const [hover, setHover] = useState(false);

  return (
    <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <NavLink to={to}>
        {text}
        {hover ? <RiArrowDropDownLine className={cl('icon')} /> : <RiArrowDropRightLine className={cl('icon')} />}
      </NavLink>
      <ul className={cl('sub-menu')}>{children}</ul>
    </li>
  );
}
export default SubMenu;
