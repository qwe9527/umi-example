import React from 'react';
import './index.less';
import { Avatar, Badge, Menu, Dropdown, Modal } from 'antd';
import { Link, useHistory } from 'umi';
import { BellOutlined, DownOutlined } from '@ant-design/icons';
import defaultAvatar from '@/assets/avatar.jpg';
import {
  routerTitleMap,
  headerRouterMap,
  IHeaderRouter,
} from '@/configs/routes';

const renderHeaderMenu = (routes: IHeaderRouter[], selectedKeys: string[], onSelect: any) => (
  <Menu
    mode='horizontal'
    selectedKeys={selectedKeys}
    onSelect={onSelect}
  >
    {routes.map(({ name, key, authId }) => (
      <Menu.Item key={key}>{name}</Menu.Item>
    ))}
  </Menu>
);

export default () => {
  const history = useHistory();

  const { pathname } = history.location;
  const pathArr = pathname.split('/');
  const headerTitle = routerTitleMap[pathArr[1]];
  const headerRouter = headerRouterMap[pathArr[1]] || [];

  const handleSelect = ({ key }: { key: string }) => {
    if (key === 'logout') {
      Modal.confirm({
        title: '确定退出登录吗？',
        onOk: () => {},
      });
    } else {
      history.push(key);
    }
  };

  const handleHeaderRouter = ({ key }: { key: string }) => {
    history.push(`/${pathArr[1]}/${pathArr[2]}/${key}`);
  };

  const UserMenu = (
    <Menu onClick={handleSelect as any}>
      <Menu.Item key="/user">个人中心</Menu.Item>
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <div className="left">
        <h2 className="left title">{headerTitle}</h2>
        <div className="nav-wrap">
          {renderHeaderMenu(headerRouter, [pathArr[3]], handleHeaderRouter)}
        </div>
      </div>
      <div className="right">
        <Link to="/common/alertMsg">
          <Badge count={0}>
            <BellOutlined />
          </Badge>
        </Link>
        <Dropdown overlay={UserMenu} className="margin-lr">
          <span>
            <DownOutlined className="margin-left-xs" />
          </span>
        </Dropdown>
        <Avatar src={defaultAvatar} size="large" />
      </div>
    </div>
  );
};
