import classNames from 'classnames/bind';

import style from './style.module.scss';
import FormLogin from './Form/FormLogin';
import Auth from './Auth';

const cl = classNames.bind(style);

function Login() {
  return (
    <div className={cl('container')}>
      <Auth isLogin={true} form={<FormLogin />} />
    </div>
  );
}
export default Login;
