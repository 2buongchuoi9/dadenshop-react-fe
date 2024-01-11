import { Avatar, Button, Card, Descriptions, Image, Layout, Space, Tabs } from 'antd';
import Modal from 'antd/es/modal/Modal';
import { memo, useState } from 'react';
import { AddMedia, AllMedia } from '../pages/Admedia';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

const getItems = (key, label, children) => ({ key, label, children });

function ModalImage({ onSelectImage, addText, textBnt }) {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);

  const handleSelect = (item) => {
    setShow(false);
    onSelectImage(item);
  };

  return (
    <div>
      <Button
        onClick={() => {
          console.log('show');
          setShow(true);
        }}
      >
        {textBnt ? textBnt : 'Thêm ảnh'}
      </Button>
      <Modal
        open={show}
        onOk={() => setShow(false)}
        onCancel={() => setShow(false)}
        footer={
          item ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <Space>
                  đã chọn
                  <Image src={item.link} style={{ maxHeight: '32px' }} />
                </Space>
              </div>
              <Button type="primary" onClick={() => handleSelect(item)}>
                {addText ? addText : 'add image'}
              </Button>
            </div>
          ) : null
        }
        width={1300}
        style={{
          position: 'sticky',
        }}
      >
        <Tabs
          style={{ maxHeight: '600px', overflowY: 'scroll' }}
          type="card"
          items={[
            {
              label: 'chọn',
              key: '1',
              children: (
                <Layout>
                  <Content>
                    <div style={{ overflowY: 'scroll', height: '500px' }}>
                      <AllMedia onClickItem={(item) => setItem(item)} />
                    </div>
                  </Content>
                  <Sider style={{ background: 'transparent' }} width={'25%'}>
                    <Card title="Chi tiết đính kèm">
                      <Image src={item?.link} style={{ minHeight: '80px' }} />
                      <Descriptions
                        layout="horizontal"
                        column={1}
                        items={[
                          getItems(1, 'Creat at: ', item?.creatAt),
                          getItems(2, 'Content type: ', item?.contentType),
                          getItems(3, 'Size: ', item?.size + ' kb'),
                        ]}
                      ></Descriptions>
                    </Card>
                  </Sider>
                </Layout>
              ),
            },
            {
              label: 'thêm',
              key: '2',
              children: (
                <div style={{ overflowY: 'scroll', height: '500px' }}>
                  <AddMedia />
                </div>
              ),
            },
          ]}
        ></Tabs>
      </Modal>
    </div>
  );
}
export default memo(ModalImage);
