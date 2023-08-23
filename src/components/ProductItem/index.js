import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { IoLogoUsd } from 'react-icons/io5';

import style from './ProductItem.module.scss';

const cl = classNames.bind(style);

function ProductItem({ data }) {
  return (
    <Link to={'/'} className={cl('wrapper')}>
      <img className={cl('img')} src={data.img} alt={data.ten} />
      <div className={cl('info')}>
        <h5 className={cl('name')}>
          <span>{data.ten}</span>
        </h5>
        <IoLogoUsd className={cl('icon')} />
        <span className={cl('gia')}>{data.gia}</span>
      </div>
    </Link>
  );
}
export default ProductItem;
