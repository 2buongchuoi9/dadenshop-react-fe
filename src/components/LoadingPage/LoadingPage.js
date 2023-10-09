import classNames from 'classnames/bind';
import style from './style.module.scss';

const cl = classNames.bind(style);

function LoadingPage() {
  return (
    <div className={cl('page-loader')}>
      <div className={cl('logo')}></div>
      <div className={cl('loader')}></div>
    </div>
  );
}
export default LoadingPage;
