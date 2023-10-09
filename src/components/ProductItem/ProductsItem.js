import { AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { LuGitCompare } from 'react-icons/lu';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './ProductItem.module.scss';
import Button from '../Button';
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { memo } from 'react';
import { cartsAction } from '~/app/slice/cartSlice';

const cl = classNames.bind(style);

function ProductItem({ item, className }) {
  const dispatch = useDispatch();

  const handleBuyClick = (item) => {
    const a = { product: item, quantity: 1 };
    console.log(a);
    dispatch(cartsAction.addCart(a));
  };

  return (
    <div className={cl('product-item', { [className]: className })}>
      <div className={cl('top')}>
        <div className={cl('sale')}>
          33
          <span> %</span>
        </div>
        <Link to={`/products/${item.id}`}>
          <img src={item.img} alt="c" className={cl('img')} style={{ width: '100%' }} />
        </Link>
        <div className={cl('right-buttons')}>
          <Button className={cl('view')} circle outline iconLeft={<AiOutlineEye />} />
          <Button className={cl('wishList')} circle outline iconLeft={<AiOutlineHeart />} />
          <Button className={cl('wishList')} circle outline iconLeft={<LuGitCompare />} />
        </div>
        <div className={cl('bottom-buttons')}>
          <Button
            size="l"
            primary
            className={cl('btn-mua')}
            iconLeft={<AiOutlineShoppingCart />}
            onClick={() => {
              handleBuyClick(item);
            }}
          >
            Mua
          </Button>
        </div>
      </div>
      <div className={cl('bottom')}>
        <Link to={'/products/' + item.id} className={cl('ten-sp')}>
          {item.ten}
        </Link>
        {/* {item.rating} */}
        <Rating readOnly index={Math.random() * 5 + 1} />
        <div className={cl('gia-sp')}>
          {item.giaKM ? (
            <>
              <span className={cl('gia-km')}>${item.giaKM}-</span>
              <span className={cl('gia-goc')}>${item.gia}</span>
            </>
          ) : (
            <span className={cl('gia-km')}>${item.gia}</span>
          )}
        </div>
      </div>
    </div>
  );
}
export default memo(ProductItem);
