import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import style from './MenuPopper.module.scss';
// import { Wrapper as WrapperPopper } from '~/components/Popper';
import Button from '~/components/Button';
import WrapperPopper from '../WrapperPopper';

const cl = classNames.bind(style);

function MenuPopper({ items, children, visible = false, width }) {
  const st = width ? { width: width } : {};
  const render = () => {
    return (
      <div className={cl('propper-menu')} tabIndex="-1">
        <WrapperPopper>
          <ul style={{ maxHeight: '400px', overflow: 'auto', overflowY: 'overlay' }}>
            {items &&
              items.map((v) => (
                <li key={v.id + v.ten} className={cl('item-categorie')} style={st}>
                  <Button to={v.link} iconLeft={v.avatar && <img src={v.avatar} alt={v.name} className={cl('icon')} />}>
                    <span className={cl('text')}>{v.name}</span>
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
