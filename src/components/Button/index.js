import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';

import style from './Button.module.scss';

const cl = classNames.bind(style);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  rounded = false,
  disabled = false,
  circle = false,
  size = 'none',
  children,
  className,
  iconLeft,
  iconRight,
  width = false,
  onClick,
  ...props
}) {
  let Comp = 'button';
  const _props = {
    onClick,
    ...props,
  };

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith('on') && typeof _props[key] === 'function') {
        delete _props[key];
      }
    });
  }

  Comp = to ? ((_props.to = to), (Comp = Link)) : href ? ((_props.href = href), (Comp = 'a')) : (Comp = 'button');

  const clazz = cl('wrapper', {
    [className]: className,
    [size]: size,
    disabled,
    outline,
    primary,
    rounded,
    circle,
    width,
  });

  return (
    <Comp className={clazz} {..._props}>
      {iconLeft && <span className={cl('icon')}>{iconLeft}</span>}
      {children && <span className={cl('title')}>{children}</span>}
      {iconRight && <span className={cl('icon')}>{iconRight}</span>}
    </Comp>
  );
}
export default Button;
