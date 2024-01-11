import { Card, Descriptions, Image, Input, Layout, Table } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import service from '~/services';

function AllPromorion() {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchAPi = async () => {
      const a = await service.promotion.getAllPromotions();
      console.log('a', a);
      setPromotions(a.data.map((v) => ({ ...v, key: v.id })));
    };
    fetchAPi();
  }, []);

  const columns = [
    { key: 'key', title: 'id', dataIndex: 'id' },
    {
      key: 'key',
      title: 'name',
      dataIndex: 'name',
      render: (t, r) => <Link to={`/admin/promotion/${r.id}`}>{t}</Link>,
    },
    {
      key: 2,
      title: 'image',
      dataIndex: 'avatar',
      render: (t, r) => {
        console.log('c', t, r);
        return <Image src={t} width={50} height={50} style={{ objectFit: 'cover' }} />;
      },
    },
  ];

  const rowSelection = () => {};

  return (
    <>
      <Table
        dataSource={promotions}
        columns={columns}
        onChange={''}
        bordered
        title={() => <Input.Search onSearch={(v) => console.log(v)} enterButton />}
        rowSelection={{ onChange: (selectKey, selectRow) => console.log('c', selectKey, selectRow) }}
      />
    </>
  );
}
export default AllPromorion;
