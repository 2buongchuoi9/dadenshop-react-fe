import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import style from './MenuPopper.module.scss';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import Button from '~/components/Button';

const cl = classNames.bind(style);

function MenuPopper({ items, children, visible = false }) {
  const render = () => {
    return (
      <div className={cl('propper-menu')} tabIndex="-1">
        <WrapperPopper>
          <ul>
            {items &&
              items.map((v) => (
                <li key={v.id} className={cl('item-categorie')}>
                  <Button to={v.link} iconLeft={v.icon && <img src={v.icon} alt={v.ten} className={cl('icon')} />}>
                    <span className={cl('text')}>{v.ten}</span>
                  </Button>
                </li>
              ))}
          </ul>
        </WrapperPopper>
      </div>
    );
  };

  return visible ? (
    <Tippy visible delay={200} className={cl('tippy-menu')} placement="bottom-start" interactive render={render}>
      {children}
    </Tippy>
  ) : (
    <Tippy delay={200} className={cl('tippy-menu')} placement="bottom-start" interactive render={render}>
      {children}
    </Tippy>
  );
}
export default MenuPopper;
