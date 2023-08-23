import classNames from 'classnames';
import style from './Footer.module.scss';

const cl = classNames.bind(style);

function Footer() {
  return <footer className={cl('wrapper')}></footer>;
}
export default Footer;
