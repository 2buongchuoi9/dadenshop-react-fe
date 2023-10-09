import classNames from 'classnames/bind';

import style from './style.module.scss';
import FormRegister from './Form/FormRegister';
import Auth from './Auth';

const cl = classNames.bind(style);

function Register() {
  return (
    <div className={cl('container')}>
      <Auth isLogin={false} form={<FormRegister />} />
    </div>
  );
}
export default Register;
