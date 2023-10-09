import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import routerConfig from '~/config/routes';

function TitlePage({ page, link }) {
  return (
    <div style={{ boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
      <div className="container" style={{ fontSize: '0.85rem', padding: '5px 0' }}>
        <AiFillHome size={13} style={{ marginRight: '10px', color: 'var(--color_primary)' }} />
        <Link to={routerConfig.home}>Trang chủ</Link>
        <span style={{ margin: '0 15px' }}>{'>'}</span>
        <Link to={link}>{page}</Link>
      </div>
    </div>
  );
}
export default memo(TitlePage);
