import { AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { LuGitCompare } from 'react-icons/lu';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './ProductItem.module.scss';
import Button from '../Button';
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { memo, useContext, useEffect, useState } from 'react';
import { cartsAction } from '~/app/slice/cartSlice';
import service from '~/services';
import { Context } from '~/App';

const cl = classNames.bind(style);

function ProductItem({ item, className }) {
  const dispatch = useDispatch();

  const { messageApi } = useContext(Context);

  const [sale, setSale] = useState([]);

  if (sale && item.saleOffId)
    item = {
      ...item,
      tiLe: sale.find((v) => v.id === item.saleOffId)?.tiLe,
      giaKM: Number(item.price * sale.find((v) => v.id === item.saleOffId)?.tiLe),
    };

  useEffect(() => {
    const fechAPI = async () => {
      const a = await service.saleOff.getAllSaleOff();
      console.log('a', a.data);
      setSale(a.data);
    };
    fechAPI();
  }, []);

  const handleBuyClick = (item) => {
    const a = { product: item, quantity: 1 };
    console.log('pro', a);
    messageApi.success('Thêm vào giỏ hàng thành công. Sản phẩm: ' + item.name);
    dispatch(cartsAction.addCart(a));
  };

  return (
    <>
      <div className={cl('product-item', { [className]: className })}>
        <div className={cl('top')}>
          {item.tiLe && (
            <div className={cl('sale')}>
              {item.tiLe} <span> %</span>
            </div>
          )}

          <div style={{ minHeight: '200px' }}>
            <Link to={`/products/${item.id}`}>
              <img
                src={item.image}
                alt="c"
                className={cl('img')}
                style={{ width: '100%', objectFit: 'contain', alignItems: 'center', padding: '10px' }}
              />
            </Link>
          </div>
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
            {item.name}
          </Link>
          {/* {item.rating} */}
          <Rating readOnly index={Math.random() * 5 + 1} />
          <div className={cl('gia-sp')}>
            {item.saleOffId ? (
              <>
                <span className={cl('gia-km')}>${item.giaKM}-</span>
                <span className={cl('gia-goc')}>${item.price}</span>
              </>
            ) : (
              <span className={cl('gia-km')}>${item.price}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(ProductItem);
