import { Button, Pagination } from 'antd';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import style from './style.module.scss';
import service from '~/services';
import { CheckOutlined } from '@ant-design/icons';
import MediaDetail from '../../component/MediaDetail';

const cl = classNames.bind(style);

function AllMedia({ onClickItem }) {
  const [images, setImages] = useState([]);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(24);
  const [value, setValue] = useState([]);
  const [update, setUpdate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleOnClick = (item) => {
    if (onClickItem) {
      onClickItem(item);
    }
    setValue(item);
    setShowModal(true);
  };

  useEffect(() => {
    const fechAPI = async () => {
      const a = await service.file.getAllFile({ page: page, limit: limit });
      console.log(a);
      setTotal(a.data.total);
      setImages(a.data.data);
      setUpdate(false);
    };
    fechAPI();
  }, [page, limit, update]);
  return (
    <>
      {!onClickItem && value !== null && showModal && (
        <MediaDetail value={value} onCancel={() => setValue(null)} onUpdateOk={() => setUpdate(true)} />
      )}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          // background: 'transparent',
        }}
      >
        {images &&
          images.map((v, i) => (
            <div
              key={v.id}
              onClick={() => handleOnClick(v)}
              style={{
                width: '150px',
                height: '150px',
                background: '#fff',
                padding: '10px',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
              className={cl({ checked: value === v })}
            >
              {onClickItem && value === v && (
                <Button shape="circle" size="small" type="primary" icon={<CheckOutlined />}></Button>
              )}
              <img
                alt=""
                src={v.link}
                style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                  border: '1px solid #cbcdcf',
                  overflow: 'hidden',
                }}
              />
            </div>
          ))}
      </div>

      <Pagination
        style={{ marginTop: '15px' }}
        total={total}
        current={page}
        // defaultPageSize={pageCount}
        onChange={(page) => setPage(page)}
        defaultPageSize={limit}
        pageSizeOptions={[24, 24 * 2, 24 * 5]}
        onShowSizeChange={(c, s) => setLimit(s)}
        showSizeChanger
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} images`}
      />
    </>
  );
}
export default AllMedia;
