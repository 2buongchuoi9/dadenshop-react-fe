// import style from './Header.module.scss';
import TopHeader from '~/Layout/components/Header/TopHeader';
import MidHeader from '~/Layout/components/Header/MidHeader';
import { memo } from 'react';

function Header() {
  return (
    <header>
      <TopHeader />
      <MidHeader />
      {/* <NavHeader /> */}
    </header>
  );
}
export default memo(Header);
