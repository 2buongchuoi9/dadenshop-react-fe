import classNames from 'classnames/bind';

import style from './scss/ShoePage.module.scss';
import TitlePage from './component/TitlePage';
import routerConfig from '~/config/routes';
import SliderHotSale from '../components/HotSale';

const cl = classNames.bind(style);

function ShoePage() {
  return (
    <div className={cl('shoe-page')}>
      <TitlePage page={'Giày'} link={routerConfig.shoe} />
      <div className={cl('container')}>
        <div style={{ marginTop: '10px' }}>
          <SliderHotSale />
        </div>

        <div className={cl('filter')}>
          <div className={cl('filter-tieuChi')}>
            <div className={cl('title')}>Chọn theo tiêu chí</div>
            <div className={cl('content')}></div>
          </div>
          <div className={cl('filter-sapXep')}>
            <div className={cl('title')}>Sắp xếp theo</div>
            <div className={cl('content')}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShoePage;
