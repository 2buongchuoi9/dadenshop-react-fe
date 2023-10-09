import { Image, Input, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import service from '~/services';

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const fechApi = async () => {
      const a = await service.category.getCategories();
      console.log(a.data);

      setCategorys(a.data);
    };
    fechApi();
  }, []);

  const handleSearch = (text) => {
    console.log(text);
  };

  const column = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      render: (text, r) => {
        console.log(r);

        return (
          <Space>
            <Image src={r.image} width={50} height={50} />
            <Link to={`${r.id}`} children={r.name} />
          </Space>
        );
      },
    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: 'price',
      render: (t, r) => <span>{t} đ</span>,
    },

    { key: 'quantity', title: 'Quantity', dataIndex: 'quantity' },
    { key: 'status', title: 'status', dataIndex: 'status', render: (t, r) => <span>{r.status ? 'Hiện' : 'Ẩn'}</span> },
    {
      key: 'category',
      title: 'Category',
      dataIndex: 'categoryId',
      render: (t, r) => <Link to={`/admin/category/${r.id}`}>{categorys.find((v) => v.id === r.categoryId).name}</Link>,
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === 'Disabled User',
    //   // Column configuration not to be checked
    //   name: record.name,
    // }),
  };

  useEffect(() => {
    const fechApi = async () => {
      const a = await service.product.getProducts();
      console.log(a);

      setProducts(a.data.map((v) => ({ ...v, key: v.id })));
    };
    fechApi();
  }, []);

  return (
    <>
      <Table
        dataSource={products}
        columns={column}
        bordered
        size="small"
        title={() => {
          return <Input.Search placeholder="Search product" onSearch={(text) => handleSearch(text)} enterButton />;
        }}
        rowSelection={rowSelection}
      />
    </>
  );
}
export default AllProduct;
