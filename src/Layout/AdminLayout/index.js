import { Layout, Menu, Breadcrumb, Space, Badge, Avatar, Button } from 'antd';
import {
  DesktopOutlined,
  MenuOutlined,
  PieChartOutlined,
  ProfileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { TfiMenuAlt } from 'react-icons/tfi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { useState } from 'react';
import classNames from 'classnames/bind';

import style from './AdminLayout.module.scss';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import routerConfig from '~/config/routes';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const cl = classNames.bind(style);

const avt = 'http://localhost:8082/api/files/02b987f3495344bc97a3876e612cea39.jpg';
const lg = 'http://localhost:8082/api/files/c697bb97293d455f87a0ffb0556398dd.png';

const item = (key, label, icon, children) => ({ label, key, icon, children });

function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const navigate = useNavigate();
  const pathNames = useLocation()
    .pathname.split('/')
    .filter((i) => i);
  const admin = routerConfig.admin;
  const items = [
    item(admin.home, 'DashBoard', <AiOutlineDashboard size={25} />),
    item('1', 'News', <AiOutlineDashboard size={25} />, [
      item(admin.news.all, 'All news'),
      item(admin.news.add, 'Add news'),
    ]),
    item(admin.newsCategory.all, 'News category', <AiOutlineDashboard size={25} />),
    item('2', 'Media', <AiOutlineDashboard size={25} />, [
      item(admin.media.all, 'All media'),
      item(admin.media.add, 'Add media'),
    ]),
    item('3', 'products', <AiOutlineDashboard size={25} />, [
      item(admin.products.all, 'all product'),
      item(admin.products.add, 'add product'),
    ]),
  ];

  const itemBreadcrumb = () => {
    const a = pathNames.map((v, i) => {
      const to = '/' + pathNames.slice(0, i + 1).join('/');
      return {
        key: to,
        title: <NavLink to={to}>{v}</NavLink>,
      };
    });
    console.log(a[0]);

    return a;
  };

  return (
    <div style={{}}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ width: '30%' }} trigger={null}>
          <div style={{ textAlign: 'center', margin: '10px 0' }}>
            <Link to={'/'}>
              <img src={lg} alt="" />
            </Link>
            <hr />
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={['']}
            mode="inline"
            items={items}
            onClick={({ key }) => {
              if (key === 'signout') {
              } else {
                navigate(key);
              }
            }}
          ></Menu>
        </Sider>
        <Layout style={{ width: '60%' }}>
          <Header
            style={{
              background: '#fff',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0  30px 0 16px',
            }}
          >
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px', alignItems: 'center' }}> */}
            <Button
              type="default"
              icon={<MenuOutlined color="var(--color_border)" />}
              onClick={() => setCollapsed(!collapsed)}
            />

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className={cl('header-item')}>
                <Badge count={13} color="red">
                  <Avatar
                    icon={<IoMdNotificationsOutline size={25} color="var(--color_border)" />}
                    style={{ background: 'rgba(0,0,0,0)' }}
                  />
                </Badge>
              </div>
              <div className={cl('header-item')}>
                <Badge count={13} color="orange">
                  <Avatar
                    icon={<TfiMenuAlt size={25} color="var(--color_border)" />}
                    style={{ background: 'rgba(0,0,0,0)' }}
                  />
                </Badge>
              </div>
              <div className={cl('header-item')}>
                <Badge count={23} color="blue">
                  <Avatar
                    icon={<HiOutlineMailOpen size={25} color="var(--color_border)" />}
                    style={{ background: 'rgba(0,0,0,0)' }}
                  />
                </Badge>
              </div>
              <div
                className={cl('header-item')}
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
              >
                <Avatar size={40} shape="circle" src={avt} />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                  <p style={{ lineHeight: '20px' }}>Dũng</p>
                  <p style={{ lineHeight: '20px' }}>Nguyenssk043@gmail.com</p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} items={itemBreadcrumb()} />

            {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}.</div> */}
            <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2016 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
export default AdminLayout;
