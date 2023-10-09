import classNames from 'classnames/bind';

import style from './style.module.scss';

const cl = classNames.bind(style);

function CheckBoxField({ field, form, type = 'text', label, placeholder, disabled = false }) {
  const { name } = field;

  return (
    <div className={cl('form_group', 'cb')}>
      <input
        className={cl('input-cb')}
        name={name}
        type={type}
        id={name + '_id'}
        placeholder={placeholder}
        disabled={disabled}
        {...field}
      />
      {label && (
        <label className={cl('label-cb')} htmlFor={name + '_id'}>
          {label}
        </label>
      )}
    </div>
  );
}
export default CheckBoxField;
