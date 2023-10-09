import { Button, Card, Input, Layout, Radio, Space } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useParams } from 'react-router-dom';
import ModalImage from '../../component/ModalImage';
import JoditEditor from 'jodit-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import service from '~/services';

function ProductDetail({ add = false }) {
  const id = useParams();
  const editor = useRef(null);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchAPi = async () => {
      const a = await service.category.getCategories();
      console.log(a);
      setCategory(a.data);
    };
    fetchAPi();
  }, []);

  const [product, setProduct] = useState(null);
  console.log(product);

  const handleSelectImage = (img) => {
    console.log(img);
  };

  return (
    <div>
      <Layout>
        <Content style={{ padding: '0 20px 0 0' }}>
          <Input size="large" placeholder="Tên sản phẩm" />
          <Card title="Description" style={{ marginTop: '10px' }}>
            <Space direction="vertical">
              <ModalImage addText={'add image to product'} onSelectImage={(img) => handleSelectImage(img)} />
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
                value={product?.description}
                // onBlur={(text) => handleTextChange(text)}
                onChange={(text) => setProduct({ ...product, description: text })}
              />
            </Space>
          </Card>
        </Content>
        <Sider width={'25%'} style={{ backgroundColor: 'transparent' }}>
          <Space direction="vertical">
            <Card title="oke"></Card>
            <Card title="category">
              <Radio.Group
                onChange={(e) =>
                  setProduct({ ...product, categoryID: category.find((c) => c.id === e.target.value).id })
                }
                value={product?.categoryID}
              >
                <Space direction="vertical">
                  {category &&
                    category.map((v, i) => (
                      <Radio key={v.id} value={v.id}>
                        {v.name}
                      </Radio>
                    ))}
                </Space>
              </Radio.Group>
            </Card>
          </Space>
        </Sider>
      </Layout>
    </div>
  );
}
export default ProductDetail;
