import { Input, Table } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AllSale() {
  const [sales, setSales] = useState([]);

  const columns = [
    {
      key: 'key',
      title: 'name',
      dataIndex: 'name',
      render: (t, r) => <Link to={`/admin/promotion/${r.id}`}>{t}</Link>,
    },
  ];

  return (
    <>
      <Table
        dataSource={sales}
        columns={columns}
        onChange={''}
        bordered
        title={() => <Input.Search onSearch={(v) => console.log(v)} enterButton />}
        rowSelection={{ onChange: (selectKey, selectRow) => console.log('c', selectKey, selectRow) }}
      />
    </>
  );
}
export default AllSale;
