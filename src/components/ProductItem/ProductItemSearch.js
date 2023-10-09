import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { IoLogoUsd } from 'react-icons/io5';

import style from './ProductItemSearch.module.scss';
import { memo } from 'react';

const cl = classNames.bind(style);

function ProductItemSearch({ data }) {
  return (
    <Link to={'/'} className={cl('wrapper')}>
      {data && (
        <>
          <img className={cl('img')} src={data.img} alt={data.ten} />
          <div className={cl('info')}>
            <h5 className={cl('name')}>
              <span>{data.ten}</span>
            </h5>
            <IoLogoUsd className={cl('icon')} />
            <span className={cl('gia')}>{data.gia}</span>
          </div>
        </>
      )}
    </Link>
  );
}
export default memo(ProductItemSearch);
