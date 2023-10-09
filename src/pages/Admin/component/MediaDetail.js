import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Card, Descriptions, Divider, Image, Input, Layout, Modal, Radio, Space, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import clipboardCopy from 'clipboard-copy';
import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import service from '~/services';

const getItems = (key, label, children) => ({ key, label, children });

function MediaDetail({ value, onCancel, onUpdateOk }) {
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    setImage(value);
    // setOpen(false);
    console.log(value);
    return () => {
      setImage(null);
    };
  }, [value]);

  const handelCoppy = () => {
    clipboardCopy(image?.link)
      .then(() => {
        message.success('copied to clipboard');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handelDelete = (image) => {
    console.log(image);
    service.file.remove(
      image,
      '',
      () => {
        message.success('xóa thành công');
        setImage(null);
        onUpdateOk();
      },
      (e) => message.error('update false ' + e),
    );
  };
  const handelUpDate = (image) => {
    service.file.update(image, '', () => {
      message.error('update thành công');
      onUpdateOk();
    });
    console.log(image);
  };

  return (
    <>
      (
      <Modal
        open={image}
        onCancel={onCancel}
        footer={
          <Space size={'large'}>
            <Button style={{ marginTop: '20px' }} type="primary" danger onClick={() => handelDelete(image)}>
              Xóa ảnh
            </Button>
            <Button style={{ marginTop: '20px' }} type="primary" onClick={() => handelUpDate(image)}>
              cập nhật
            </Button>
          </Space>
        }
        width={1300}
        style={{
          position: 'sticky',
        }}
      >
        <Card
          title="chi tiết hình ảnh"
          style={{ marginTop: '25px' }}
          extra={
            <Radio.Group>
              <Radio.Button>
                <CaretLeftOutlined />
              </Radio.Button>
              <Radio.Button>
                <CaretRightOutlined />
              </Radio.Button>
            </Radio.Group>
          }
        >
          <Layout>
            <Content style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <Image src={image?.link} style={{ maxHeight: '400px', objectFit: 'contain' }} />
            </Content>
            <Sider width={'35%'} style={{ background: 'transparent', overflowY: 'overLay' }}>
              <Card title="chi tiết" style={{ maxHeight: '450px', overflowY: 'scroll' }}>
                <div>
                  <Descriptions
                    layout="horizontal"
                    column={1}
                    items={[
                      getItems(1, 'Creat at', image?.creatAt),
                      getItems(2, 'Content type', image?.contentType),
                      getItems(3, 'Size', image?.size + ' kb'),
                    ]}
                  ></Descriptions>
                  <Divider></Divider>
                  <Descriptions
                    layout="horizontal"
                    column={1}
                    items={[
                      getItems(
                        5,
                        'name',
                        <Input
                          type="text"
                          onChange={(e) => setImage({ ...image, name: e.target.value })}
                          value={image?.name}
                        />,
                      ),
                      getItems(
                        6,
                        'description',
                        <TextArea
                          rows={4}
                          onChange={(e) => setImage({ ...image, description: e.target.value })}
                          value={image?.description}
                        />,
                      ),
                      getItems(7, 'link', <Input value={image?.link} />),
                      {
                        ...getItems(
                          8,
                          '',
                          <Button type="primary" ghost onClick={handelCoppy}>
                            coppy
                          </Button>,
                        ),
                        contentStyle: { display: 'flex', justifyContent: 'end' },
                      },
                    ]}
                  />
                </div>
              </Card>
            </Sider>
          </Layout>
        </Card>
      </Modal>
      )
    </>
  );
}
export default memo(MediaDetail);
