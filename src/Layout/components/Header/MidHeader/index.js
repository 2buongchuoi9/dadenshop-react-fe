import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiHeartCircle } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';

import * as ServiceCategories from '~/services/categoriesService';
// import { Wrapper as WrapperPopper } from '~/components/Popper';
import style from './MidHeader.module.scss';
import images from '~/images';
import MidItem from './MidItem';
// import Tippy from '@tippyjs/react/headless';
import MenuPopper from '~/components/Popper/MenuPopper';
import Button from '~/components/Button';
import routerConfig from '~/config/routes';
import Search from '~/Layout/components/Searcch';

const cl = classNames.bind(style);
function MidHeader() {
  // const [visible, setVisible] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const cate = await ServiceCategories.getCategories();

      // custom lại item để truyền vào
      cate.map((v) => {
        return (v.link = 'categories/' + v.id);
      });

      setItem(cate);
      console.log(cate);
    };
    fetchAPI();
  }, []);

  return (
    <div className={('wrapper', 'mid-header')}>
      <div className={cl('container', 'row')}>
        {/* logo */}
        <div className={cl('logo', 'mid-header-left')}>
          <Button to={routerConfig.home} iconLeft={<img src={images.logo} alt="logo"></img>}></Button>
        </div>

        {/* render danh mục sản phẩm */}
        <MenuPopper items={item}>
          <div>
            <Button
              iconLeft={<AiOutlineMenu className={cl('icon')} />}
              size="l"
              outline
              className={cl('dropDown-menu')}
            >
              Tất cả danh mục
            </Button>
          </div>
        </MenuPopper>

        {/* tìm kím */}
        <Search />

        {/* <div className={cl('search')}>
          <input type="search" placeholder="search item..." />
          <BiLoaderCircle className={cl('loading', 'icon')} />
          <Button iconLeft={<TiDelete className={cl('icon')} />} className={cl('clear')} />

          <Button iconLeft={<BiSearch className={cl('icon')} />} className={cl('search-btn')} />
        </div> */}

        {/* item */}
        <div className={cl('mid-header-right')}>
          <MidItem icon={<BiHeartCircle />} title="Yêu thích" text="0 item" />
          <MidItem icon={<BsCart3 />} title="giỏ hàng" text="$100 VND" count={'5'} />
        </div>
      </div>
    </div>
  );
}

export default MidHeader;
