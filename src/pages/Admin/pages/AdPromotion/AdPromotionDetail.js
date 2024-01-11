import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Card, Descriptions, Image, Input, Layout, Space, Switch } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import service from '~/services';
import ModalImage from '../../component/ModalImage';

function AdPromotionDetail({ add = false }) {
  const { id } = useParams();

  const [promotion, setPromotion] = useState(null);
  const [show, setShow] = useState({ handIn: true });

  console.log(id);

  useEffect(() => {
    const fechApi = async () => {
      if (id) {
        const a = await service.promotion.getById(id);
        setPromotion(a.data);
      }
    };
    fechApi();
  }, [id]);
  console.log('promoyion', promotion);

  return (
    <>
      <Layout>
        <Content style={{ padding: '0 20px 0 0' }}>
          <Input value={promotion?.name} onChange={(e) => setPromotion({ ...promotion, name: e.target.value })} />
        </Content>
        <Sider width={'25%'} style={{ backgroundColor: 'transparent' }}>
          <Card
            title="Hand in"
            extra={
              <Button
                type="dashed"
                size="small"
                shape="circle"
                icon={show.handIn ? <UpOutlined /> : <DownOutlined />}
                onClick={() => setShow({ ...show, handIn: !show.handIn })}
              />
            }
          >
            {show.handIn && (
              <Space direction="vertical">
                <Descriptions
                  items={[
                    {
                      key: '1',
                      label: 'Status',
                      children: (
                        <Switch
                          checked={promotion?.status}
                          checkedChildren="Hiện"
                          unCheckedChildren="Ẩn"
                          onChange={(e) => setPromotion({ ...promotion, status: e })}
                        />
                      ),
                    },
                  ]}
                />
                <Button type="primary">{add ? 'add' : 'update'}</Button>
              </Space>
            )}
          </Card>
          <Card title="image">
            <Space direction="vertical">
              <Image src={promotion?.avatar} />
              <ModalImage
                addText={'Add image to promotion'}
                textBnt={promotion?.avatar ? 'Change image' : 'Add image'}
                onSelectImage={(image) => setPromotion({ ...promotion, avatar: image.link })}
              />
            </Space>
          </Card>
        </Sider>
      </Layout>
    </>
  );
}
export default AdPromotionDetail;
