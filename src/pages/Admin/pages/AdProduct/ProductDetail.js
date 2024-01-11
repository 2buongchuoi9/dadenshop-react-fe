import {
  Button,
  Card,
  DatePicker,
  Descriptions,
  Form,
  Image,
  Input,
  Layout,
  Radio,
  Select,
  Space,
  Switch,
  Tooltip,
  message,
} from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useParams } from 'react-router-dom';
import ModalImage from '../../component/ModalImage';
import JoditEditor from 'jodit-react';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import service from '~/services';
import style from './AdProduct.module.scss';
import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';

import dayjs from 'dayjs';
import { messageAntd } from '~/utils';
import { useForm } from 'antd/es/form/Form';
import { Context } from '~/App';

const cl = classNames.bind(style);

const format = 'DD-MM-YYYY hh:mm:ss';

function ProductDetail({ add = false }) {
  const { id } = useParams();

  const editor = useRef(null);
  const [form] = useForm();
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [product, setProduct] = useState(null);
  const [promotion, setPromotion] = useState([]);
  const [saleOff, setSaleOff] = useState([]);
  const [show, setShow] = useState({
    cate: true,
    brand: true,
    handIn: true,
  });

  const { messageApi } = useContext(Context);

  useEffect(() => {
    const fetchAPi = async () => {
      const a = await service.category.getCategories();
      const b = await service.brand.getBrands();
      const d = await service.promotion.getAllPromotions();
      const e = await service.saleOff.getAllSaleOff();
      if (id) {
        const c = await service.product.getProductById(id);
        setProduct(c.data);
      }
      setCategory(a.data);
      setBrand(b.data);
      setPromotion(d.data.map((v) => ({ ...v, value: v.id, label: v.name })));
      setSaleOff(e.data.map((v) => ({ ...v, label: v.title, value: v.id })));
    };
    fetchAPi();
  }, [id]);

  const handleTextChange = (text) => {
    setProduct({ ...product, description: text });
  };

  const handleSelectImageInNews = (item) => {
    console.log(item);
    const img = `<img src="${item.link}" alt="cc"/>`;
    console.log(editor.current);

    editor.current.selection.insertHTML(img);
  };

  const handleSubmit = (cc) => {
    console.log('vl', cc);

    if (add) {
      service.product.add(
        product,
        () => messageApi.open(messageAntd.loading('loading')),
        () => messageApi.open(messageAntd.success('thành công')),
        (e) => messageApi.open(messageAntd.success('thất bại: ' + e)),
      );
    } else {
      service.product.update(
        product,
        () => messageApi.open(messageAntd.loading('loading')),
        () => messageApi.open(messageAntd.success('thành công')),
        (e) => messageApi.open(messageAntd.success('thất bại: ' + e)),
      );
    }
  };

  console.log('product: ', product);

  return (
    <div>
      <Layout>
        <Content style={{ padding: '0 20px 0 0' }}>
          <Form
            form={form}
            layout="vertical"
            autoComplete="off"
            name="jhjkhsdkj"
            onFinishFailed={(error) => {
              console.log({ error });
            }}
            onFinish={handleSubmit}
          >
            <Space direction="vertical">
              <Form.Item rules={[{ required: true, message: 'Vui lòng nhập tên' }]} hasFeedback>
                <Input
                  size="large"
                  placeholder="Tên sản phẩm"
                  value={product?.name}
                  onChange={(e) => setProduct({ ...product, name: e.target.value })}
                />
              </Form.Item>
              <Card title="Description" size="small">
                <Space direction="vertical">
                  <ModalImage addText={'add image to product'} onSelectImage={(img) => handleSelectImageInNews(img)} />
                  <JoditEditor
                    tabIndex={1} // tabIndex of textarea
                    ref={editor}
                    config={useMemo(
                      () => ({
                        toolbarAdaptive: false,
                        readonly: false,
                        language: 'en',
                        uploader: {
                          insertImageAsBase64URI: true,
                        },

                        events: {
                          afterInit: (instance) => {
                            editor.current = instance;
                          },
                        },
                      }),
                      [],
                    )}
                    value={product?.description}
                    onChange={(text) => handleTextChange(text)}
                  />
                </Space>
              </Card>
              <Card title="Price" size="small">
                <Form.Item label="price" required tooltip="This is a required field">
                  <Input
                    addonAfter="vnd"
                    type="number"
                    placeholder="input placeholder"
                    min={0}
                    value={product?.price}
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                  />
                </Form.Item>
                <Form.Item label="Price sign" required tooltip="This is a required field">
                  <Input
                    addonAfter="vnd"
                    type="number"
                    placeholder="input placeholder"
                    min={0}
                    value={product?.price_sigin}
                    onChange={(e) => setProduct({ ...product, price_sigin: e.target.value })}
                  />
                </Form.Item>
                <Form.Item label="Quantity" required tooltip="This is a required field">
                  <Input
                    type="number"
                    placeholder="input placeholder"
                    value={product?.quantity}
                    onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
                  />
                </Form.Item>
              </Card>

              <>
                <Card
                  title={
                    <Form.Item label="Khuyến mãi">
                      <Space.Compact block>
                        <Select
                          // disabled={!valuePromotion}
                          // status="error"
                          value={product?.saleOffId ? product.saleOffId : ''}
                          onChange={(v) => setProduct({ ...product, saleOffId: v })}
                          options={[
                            { label: '-- mặc định (rỗng) --', value: '' },
                            ...promotion.map((v) => ({
                              label: v?.name,
                              options: saleOff.filter((s) => s?.promotion?.id === v.id),
                            })),
                          ]}
                        />
                        <Button type="primary">Add sale</Button>
                      </Space.Compact>
                    </Form.Item>
                  }
                >
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%', marginRight: '20px' }}>
                      <Space.Compact block direction="vertical" style={{ width: '100%' }}>
                        <Form.Item label="Phần trăm khuyến mãi">
                          <Input
                            // disabled
                            value={saleOff.find((v) => v.id === product?.saleOffId)?.tiLe}
                            width={'100%'}
                            type="number"
                            placeholder="input placeholder"
                            min={0}
                            max={100}
                            step={0.1}
                            addonAfter="%"
                          />
                        </Form.Item>
                        <Form.Item label="Phần trăm khuyến mãi">
                          <Input
                            // disabled
                            value={saleOff.find((v) => v.id === product?.saleOffId)?.tiLe}
                            width={'100%'}
                            type="number"
                            placeholder="input placeholder"
                            min={0}
                            max={100}
                            step={0.1}
                            addonAfter="%"
                          />
                        </Form.Item>
                      </Space.Compact>
                    </div>
                    <div style={{ width: '50%' }}>
                      <Space.Compact block direction="vertical" style={{ width: '100%' }}>
                        <Form.Item label="Ngày bắt đầu">
                          <DatePicker
                            // disabled
                            allowClear={false}
                            style={{ width: '100%' }}
                            showTime
                            format={format}
                            picker="date"
                            onChange={(v) => console.log(v.format(format))}
                            value={dayjs(saleOff.find((v) => v.id === product?.saleOffId)?.dateStart, format)}
                          />
                        </Form.Item>
                        <Form.Item label="Ngày kết thúc">
                          <DatePicker
                            // disabled
                            allowClear={false}
                            style={{ width: '100%' }}
                            showTime
                            format={format}
                            onChange={(v) => console.log(v.format(format))}
                            value={dayjs(saleOff.find((v) => v.id === product?.saleOffId)?.dateEnd, format)}
                          />
                        </Form.Item>
                      </Space.Compact>
                    </div>
                  </div>
                </Card>
              </>
            </Space>
            <Button
              type="primary"
              htmlType="submit"
              block
              // onClick={handleSubmit}
            >
              {add ? 'Add' : 'Update'}
            </Button>
          </Form>
        </Content>
        <Sider width={'25%'} style={{ backgroundColor: 'transparent' }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Card
              title="Hand in"
              size="small"
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
                <Space>
                  <Descriptions
                    layout="horizontal"
                    column={1}
                    items={[
                      {
                        key: '1',
                        label: 'Trạng thái',
                        children: (
                          <Switch
                            checkedChildren="Hiện"
                            unCheckedChildren="Ẩn"
                            checked={product?.status}
                            onChange={(v) => setProduct({ ...product, status: v })}
                          />
                        ),
                      },
                      {
                        key: '2',
                        label: 'Create at',
                        children: product?.createAt,
                      },
                      {
                        key: '3',
                        label: 'Update at',
                        children: product?.updateAt,
                      },
                      {
                        key: '4',
                        label: 'Hot product',
                        children: (
                          <Switch
                            checkedChildren="Hot"
                            unCheckedChildren="off"
                            checked={product?.hot ? true : false}
                            onChange={(v) => setProduct({ ...product, hot: v })}
                          />
                        ),
                      },
                      {
                        key: '5',
                        label: 'New product',
                        children: (
                          <Switch
                            checkedChildren="New"
                            unCheckedChildren="off"
                            checked={product?.new ? true : false}
                            onChange={(v) => setProduct({ ...product, new: v })}
                          />
                        ),
                      },
                    ]}
                  />
                </Space>
              )}

              <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                {add ? 'Add' : 'Update'}
              </Button>
            </Card>
            <Card
              size="small"
              title="category"
              extra={
                <Button
                  type="dashed"
                  size="small"
                  shape="circle"
                  icon={show.cate ? <UpOutlined /> : <DownOutlined />}
                  onClick={() => setShow({ ...show, cate: !show.cate })}
                />
              }
            >
              {show.cate && (
                <Radio.Group
                  onChange={(e) =>
                    setProduct({ ...product, categoryId: category.find((c) => c.id === e.target.value).id })
                  }
                  value={product?.categoryId}
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
              )}
            </Card>
            <Card
              size="small"
              title="brand"
              extra={
                <Button
                  type="dashed"
                  size="small"
                  shape="circle"
                  icon={show.brand ? <UpOutlined /> : <DownOutlined />}
                  onClick={() => setShow({ ...show, brand: !show.brand })}
                />
              }
            >
              {show.brand && (
                <Radio.Group
                  onChange={(e) => setProduct({ ...product, brandId: brand.find((c) => c.id === e.target.value).id })}
                  value={product?.brandId}
                >
                  <Space direction="vertical">
                    {brand &&
                      brand.map((v, i) => (
                        <Radio key={v.id} value={v.id}>
                          {v.name}
                        </Radio>
                      ))}
                  </Space>
                </Radio.Group>
              )}
            </Card>
            <Card title="Image" size="small">
              <Space direction="vertical">
                {product?.image && (
                  <Image
                    src={product?.image}
                    height={200}
                    style={{ objectFit: 'contain', border: '1px solid var( --color_border)' }}
                  />
                )}
                <ModalImage
                  addText="add image to product"
                  textBnt={product?.image ? 'Change image' : 'Add image'}
                  onSelectImage={(img) => setProduct({ ...product, image: img?.link })}
                />
              </Space>
            </Card>
            <Card title="Album" size="small">
              <Space direction="vertical" style={{ width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {product?.images &&
                    product?.images.map((v, i) => (
                      <div
                        className={cl('cc')}
                        style={{
                          width: '30%',
                          height: '75px',
                          border: '1px solid var( --color_border)',
                          textAlign: 'center',
                          margin: '1.6666%',
                        }}
                      >
                        <Image
                          key={i}
                          src={v}
                          height={'100%'}
                          width={'100%'}
                          style={{ objectFit: 'contain', minHeight: '50px' }}
                          preview={false}
                        />
                        <Tooltip title="delete image">
                          <Button
                            type="primary"
                            shape="circle"
                            size="small"
                            onClick={() => {
                              const a = product?.images.filter((i) => i !== v);
                              setProduct({ ...product, images: a });
                            }}
                          >
                            <CloseOutlined />
                          </Button>
                        </Tooltip>
                      </div>
                    ))}
                </div>
                <ModalImage
                  addText="add image to album product"
                  textBnt="add image"
                  onSelectImage={(img) => {
                    const a = product.images ? [...product?.images, img.link] : [img.link];
                    console.log(img);
                    // console.log(product);

                    // const a = product?.images.push(img.link);
                    setProduct({ ...product, images: a });
                    console.log(product);
                  }}
                />
              </Space>
            </Card>
          </Space>
        </Sider>
      </Layout>
    </div>
  );
}
export default ProductDetail;
