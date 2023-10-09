import { Button, Card, Descriptions, Input, Layout, Radio, Space, Switch, message } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import JoditEditor from 'jodit-react';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import service from '~/services';
import { DownOutlined, PlusOutlined, UpOutlined } from '@ant-design/icons';
import ModalImage from '../../component/ModalImage';

const getItems = (key, label, children) => ({ key, label, children });

function NewsDetail({ add = false }) {
  const { id } = useParams();
  const editor = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [news, setNews] = useState(null);
  const [newsCategory, setNewsCategory] = useState([]);
  const [show, setShow] = useState({
    update: true,
    newsCate: true,
    AddnewsCate: false,
  });

  const handleSelectImage = (item) => {
    console.log(item);
    const img = `<img src="${item.link}" alt="cc"/>`;
    console.log(editor.current);

    editor.current.selection.insertHTML(img);
  };

  const handleTextChange = (text) => {
    // const currentCursorPosition = editor.current.selection.getCursor();
    setNews({ ...news, content: text });
    // editor.current.selection.setCursor(currentCursorPosition);
  };

  useEffect(() => {
    const fechAPI = async () => {
      if (!add) {
        const a = await service.news.getOne(id);
        console.log(a.data);
        setNews(a.data);
      }

      const b = await service.newsCategory.getAll();
      console.log(b.data);
      setNewsCategory(b.data);
    };
    fechAPI();
  }, [add, id]);

  console.log(news);

  return (
    <div>
      <Layout>
        <Content>
          <Space direction="vertical" size={'middle'} style={{ width: '100%', paddingRight: '20px' }}>
            <Input
              size="large"
              placeholder="Tiêu đề bài viết"
              value={news ? news.title : ''}
              onChange={(e) => setNews({ ...news, title: e.target.value })}
            />
            <ModalImage onSelectImage={(item) => handleSelectImage(item)} />

            <JoditEditor
              tabIndex={1} // tabIndex of textarea
              ref={editor}
              config={useMemo(
                () => ({
                  // removeButtons: ['brush', 'file'],
                  showXPathInStatusbar: false,
                  showCharsCounter: false,
                  showWordsCounter: false,
                  toolbarAdaptive: false,
                  readonly: false,
                  language: 'en',
                  events: {
                    afterInit: (instance) => {
                      editor.current = instance;
                    },
                  },
                  // uploader: {
                  //   insertImageAsBase64URI: true,
                  // },
                }),
                [],
              )}
              value={news?.content}
              // onBlur={(text) => handleTextChange(text)}
              onChange={(text) => handleTextChange(text)}
            />
          </Space>
        </Content>
        <Sider style={{ backgroundColor: 'transparent' }} width={'25%'}>
          <div>
            <Card
              style={{ marginBottom: '15px' }}
              title="oke"
              size="small"
              extra={
                <Button
                  type="dashed"
                  size="small"
                  shape="circle"
                  icon={show.update ? <UpOutlined /> : <DownOutlined />}
                  onClick={() => setShow({ ...show, update: !show.update })}
                />
              }
            >
              {show.update && (
                <Descriptions
                  layout="horizontal"
                  column={1}
                  items={[
                    getItems(
                      news?.status,
                      'Trạng thái',
                      <Switch
                        checkedChildren="Hiện"
                        unCheckedChildren="Ẩn"
                        defaultChecked={news?.status}
                        onChange={(st) => setNews({ ...news, status: st })}
                      />,
                    ),
                    getItems(news?.date, 'ngày đăng', news?.date),
                    getItems(
                      'up',
                      '',
                      <Button
                        type="primary"
                        size="large"
                        block
                        onClick={() => {
                          console.log('cập nhật');
                          console.log(news);
                          service.news.update(
                            news,
                            () => messageApi.open({ key: 1, type: 'loading', content: 'loading' }),
                            () => messageApi.open({ key: 1, type: 'success', content: 'success' }),
                            (e) => messageApi.open({ key: 1, type: 'error', content: 'false: ' + e }),
                          );
                        }}
                      >
                        Cập nhật
                      </Button>,
                    ),
                  ]}
                />
              )}
            </Card>
            <Card
              title={'news-category'}
              size="small"
              extra={
                <Button
                  type="dashed"
                  size="small"
                  shape="circle"
                  icon={show.newsCate ? <UpOutlined /> : <DownOutlined />}
                  onClick={() => setShow({ ...show, newsCate: !show.newsCate })}
                />
              }
            >
              {show.newsCate && (
                <Radio.Group
                  onChange={(e) =>
                    setNews({ ...news, newsCategory: newsCategory.find((n) => n.id === e.target.value) })
                  }
                  value={news?.newsCategory?.id}
                >
                  <Space size={'small'} direction="vertical">
                    {newsCategory &&
                      newsCategory.map((n, i) => (
                        <Radio key={n.id} value={n.id}>
                          {n.name}
                        </Radio>
                      ))}
                    <Button
                      icon={<PlusOutlined size={10} />}
                      size="small"
                      type="primary"
                      onClick={() => setShow({ ...show, AddnewsCate: !show.AddnewsCate })}
                    >
                      thêm mới
                    </Button>
                    {show.AddnewsCate && (
                      <div>
                        <Input placeholder="Name" size="middle" />
                      </div>
                    )}
                  </Space>
                </Radio.Group>
              )}
            </Card>
          </div>
        </Sider>
      </Layout>
      <Button
        type="primary"
        size="large"
        block
        onClick={() => {
          console.log('cập nhật');
          console.log(news);
          service.news.update(
            news,
            () => messageApi.open({ key: 1, type: 'loading', content: 'loading' }),
            () => messageApi.open({ key: 1, type: 'success', content: 'success' }),
            (e) => messageApi.open({ key: 1, type: 'error', content: 'false: ' + e }),
          );
        }}
      >
        Cập nhật
      </Button>
      {contextHolder}
    </div>
  );
}
export default memo(NewsDetail);
