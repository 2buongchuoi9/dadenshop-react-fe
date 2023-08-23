import classNames from 'classnames/bind';

import routerConfig from '~/config/routes';
import style from './NavHeader.module.scss';
import SubMenu from './SubMenu';
import { NavLink } from 'react-router-dom';

const cl = classNames.bind(style);

function NavHeader() {
  return (
    <div className={cl('wrapper', 'nav-header')}>
      <div className="container">
        <nav>
          <ul className={cl('menu')}>
            <li>
              <NavLink to={routerConfig.home} className={(nav) => cl({ active: nav.isActive })}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={routerConfig.products} className={(nav) => cl({ active: nav.isActive })}>
                PRODUCT
              </NavLink>
            </li>

            <SubMenu to={routerConfig.cart} text="CART">
              <li>
                <NavLink to={routerConfig.cart + '/1'} className={(nav) => cl({ active: nav.isActive })}>
                  cart1
                </NavLink>
              </li>
              <li>
                <NavLink to={routerConfig.cart + '/2'} className={(nav) => cl({ active: nav.isActive })}>
                  cart2
                </NavLink>
              </li>
            </SubMenu>
            <li>
              <NavLink to={routerConfig.blog} className={(nav) => cl({ active: nav.isActive })}>
                BLOG
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavHeader;
