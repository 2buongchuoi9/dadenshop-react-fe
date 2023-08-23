import MenuPopper from '~/components/Popper/MenuPopper';

const ITEM = [
  {
    id: 1,
    ten: 'Áo',
    icon: 'http://localhost:8081/images/categories/1.svg',
  },
  {
    id: 2,
    ten: 'Quần',
    icon: 'http://localhost:8081/images/categories/2.svg',
  },
  {
    id: 3,
    ten: 'Giày',
    icon: 'http://localhost:8081/images/categories/3.svg',
  },
  {
    id: 4,
    ten: 'Phụ kiện',
    icon: 'http://localhost:8081/images/categories/4.svg',
  },
  {
    id: 5,
    ten: 'Nón',
    icon: 'http://localhost:8081/images/categories/5.svg',
  },
  {
    id: 6,
    ten: 'Đồng hồ',
    icon: 'http://localhost:8081/images/categories/6.svg',
  },
];

function Home() {
  return (
    <div className={'container'}>
      <h2>trang home</h2>

      <MenuPopper items={ITEM} visible="true">
        <div style={{ backgroundColor: 'red' }}></div>
      </MenuPopper>
    </div>
  );
}
export default Home;
