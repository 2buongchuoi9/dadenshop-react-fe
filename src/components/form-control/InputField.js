import classNames from 'classnames/bind';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import style from './style.module.scss';
import { ErrorMessage } from 'formik';
import { useState } from 'react';

const cl = classNames.bind(style);

const Eye = ({ onClick }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    onClick();
    setShow(!show);
  };
  return (
    <div className={cl('eye')} onClick={handleClick}>
      {!show ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
    </div>
  );
};

function InputField({ field, form, type = 'text', label, placeholder = ' ', disabled = false, title, eye = false }) {
  const { name } = field;
  const { errors, touched } = form;
  const showErrors = errors[name] && touched[name];
  // console.log(field);
  // console.log(form);

  const [_type, setType] = useState(type);

  return (
    <div className={cl('form_group')}>
      <input
        name={name}
        type={_type}
        id={name + '_id'}
        placeholder={placeholder}
        disabled={disabled}
        {...field}
        className={cl('input', 'group_item', { err: showErrors })}
      />

      {(label || title) && <label htmlFor={name + '_id'} className={cl('label', { err: showErrors })} title={title} />}
      {showErrors && <p className={cl('errors')}>{errors[name]}</p>}

      {eye && <Eye onClick={() => setType(_type === 'text' ? 'password' : 'text')} />}
    </div>
  );
}
export default InputField;
