// import style from './Header.module.scss';
import TopHeader from '~/Layout/components/Header/TopHeader';
import MidHeader from '~/Layout/components/Header/MidHeader';
import NavHeader from '~/Layout/components/Header/NavHeader';

function Header() {
  return (
    <header>
      <TopHeader />
      <MidHeader />
      <NavHeader />
    </header>
  );
}
export default Header;
