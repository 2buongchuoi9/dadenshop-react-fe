import { current } from '@reduxjs/toolkit';
import { Image, Input, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import service from '~/services';

const sortDirections = ['descend', 'ascend', 'descend'];

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fechApi = async () => {
      const a = await service.category.getCategories();
      console.log(a.data);
      setCategorys(a.data);
    };
    fechApi();
  }, []);

  const handleSearch = async (text) => {
    console.log(text);
    const a = await service.product.searchProduct(text);
    console.log(a);
  };

  const column = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      render: (text, r) => (
        <Space>
          <Image src={r.image} width={50} height={50} />
          <Link to={`${r.id}`} children={r.name} />
        </Space>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: sortDirections,
    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: 'price',
      render: (t, r) => <span>{t} đ</span>,
      sorter: (a, b) => a.price - b.price,
      sortDirections: sortDirections,
    },

    {
      key: 'quantity',
      title: 'Quantity',
      dataIndex: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
      sortDirections: sortDirections,
    },
    {
      key: 'status',
      title: 'status',
      dataIndex: 'status',
      render: (t, r) => <span>{r.status ? 'Hiện' : 'Ẩn'}</span>,
      filters: [
        { text: 'Hiện', value: true },
        { text: 'Ẩn', value: false },
      ],
      onfilter: (v, r) => {
        console.log(v + '\n' + r);
        return true;
      },
    },
    {
      key: 'category',
      title: 'Category',
      dataIndex: 'categoryId',
      render: (t, r) => <Link to={`/admin/category/${r.id}`}>{categorys.find((v) => v.id === r.categoryId).name}</Link>,
      filters: categorys.map((v) => ({ text: v.name, value: v.id })),
      onFilter: (value, record) => {
        console.table('value', value);
        console.table('record', record);
        return true;
        // return record.categoryId.indexOf(value) === 0;
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  // call product
  useEffect(() => {
    const fechApi = async () => {
      const a = await service.product.getProducts(page, limit);
      console.log('page', page);
      console.log('limit', limit);

      console.log(a);
      setLimit(a.data.limit);
      setPage(a.data.page);
      setTotal(a.data.total);
      setProducts(a.data.list.map((v) => ({ ...v, key: v.id })));
    };
    fechApi();
  }, [page, limit]);

  const handleTableOnChange = (pagination, filters, sorter, extra) => {
    // setPage(pagination.current);
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      <Table
        dataSource={products}
        onChange={handleTableOnChange}
        columns={column}
        bordered
        size="small"
        title={() => {
          return <Input.Search placeholder="Search product" onSearch={(text) => handleSearch(text)} enterButton />;
        }}
        pagination={{
          total: total,
          current: page,
          defaultPageSize: limit,
          onChange: (page) => setPage(page),
          position: ['topRight', 'bottomRight'],
          onShowSizeChange: (current, limit) => {
            setLimit(limit);
            setPage(current);
          },

          showSizeChanger: true,
          pageSizeOptions: [2, 4, 6],
          showTotal: (t, r) => `${r[0]}-${r[1]} of ${t} product`,
        }}
        rowSelection={rowSelection}
      />
    </>
  );
}
export default AllProduct;
