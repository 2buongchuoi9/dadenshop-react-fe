import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import service from '~/services';

function AllNews() {
  const [news, setNews] = useState([]);
  // const [column, setColumn] = useState([]);
  const column = [
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
      t: 'id',
      render: (text, record) => {
        console.log(record);
        return <Link to={`${record.id}`}>{text}</Link>;
      },
    },
    { key: 'category', title: 'News category', dataIndex: 'newsCategory' },
    { key: 'time', title: 'Time', dataIndex: 'date' },
  ];

  useEffect(() => {
    const fechApi = async () => {
      const a = await service.news.getAll();
      console.log(a);

      setNews(a.data.map((i) => ({ ...i, newsCategory: `${i.newsCategory.name}`, key: i.id })));
    };
    fechApi();
  }, []);

  return <>{<Table dataSource={news} columns={column}></Table>}</>;
}
export default AllNews;
