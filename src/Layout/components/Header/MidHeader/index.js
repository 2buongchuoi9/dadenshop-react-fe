import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiHeartCircle, BiUserCircle } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';

import * as ServiceCategories from '~/services/categoriesService';
import style from './MidHeader.module.scss';
import MenuPopper from '~/components/Popper/MenuPopper';
import Button from '~/components/Button';
import routerConfig from '~/config/routes';
import Search from '~/Layout/components/Searcch';
import service from '~/services';
import { useSelector } from 'react-redux';
import { MidAcout, MidItem } from './MidItem';

const cl = classNames.bind(style);
function MidHeader() {
  const [item, setItem] = useState([]);
  const [fex, setFix] = useState(false);

  const [logo, ...a] = useSelector((state) => state.info.logos);

  // lấy dữ liệu từ redux
  const cart = useSelector((state) => state.carts);
  console.log(cart);

  useEffect(() => {
    const scroll = () => {
      setFix(window.scrollY > 1 ? true : false);
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      const cate = await service.category.getCategories();
      console.log('category');
      console.log(cate);
      console.log(cate.data[0]);

      // const brands = await service.brand.getBrands();
      // // custom lại item để truyền vào
      // brands.filter((v) => v.xuatXu !== '').map((v) => (v.link = 'brands/' + v.id));

      setItem(cate.data);
    };
    fetchAPI();
  }, []);

  return (
    <div className={cl('wrapper', 'mid-header', { fixed: fex })}>
      <div className={cl('container', 'row')}>
        {/* logo */}
        <div className={cl('logo', 'mid-header-left')}>
          <Link to={routerConfig.home}>
            <img src={logo} alt="logo" height={'40px'}></img>
          </Link>
        </div>
        {console.log(item)}
        {/* render danh mục sản phẩm */}
        <MenuPopper items={item}>
          <div>
            <Button
              primary
              iconLeft={<AiOutlineMenu className={cl('icon')} />}
              size="l"
              // outline
              className={cl('dropDown-menu')}
            >
              Tất cả danh mục
            </Button>
          </div>
        </MenuPopper>

        {/* tìm kím */}
        <Search />

        {/* item */}
        <div className={cl('mid-header-right')}>
          <MidItem icon={<BiHeartCircle />} title="Yêu thích" text="0 item" />
          <MidItem icon={<BsCart3 />} title="Giỏ hàng" text={cart.total + ' vnd'} count={cart.count} />
          <MidAcout />
        </div>
      </div>
    </div>
  );
}

export default MidHeader;
