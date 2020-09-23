import React, { useState, useEffect } from 'react';
import './index.less';
import { Menu } from 'antd';
import { useHistory } from 'umi';
import routes, { IRouter } from '@/configs/routes';
import IconFont from '@/components/IconFont';

const { SubMenu, Item } = Menu;

const renderMenu = (routes: IRouter[]) => {
  return routes.map(({ path, name, icon, routes }) => {
    const Icon = icon ? <IconFont type={icon} /> : undefined;
    if (routes) {
      return (
        <SubMenu key={path} icon={Icon} title={name}>
          {renderMenu(routes)}
        </SubMenu>
      );
    }
    return (
      <Item key={path} icon={Icon}>
        {name}
      </Item>
    );
  });
};

const handlePathname = (pathname: string) => {
  const pathArr = pathname.split('/').filter(value => value);
  let openKeys: string[] = [];
  if (pathArr.length > 1) {
    pathArr.forEach((value, index) =>
      openKeys.push(`${openKeys[index - 1] || ''}/${value}`),
    );
    openKeys.pop();
  }
  return openKeys;
};

export default () => {
  const [openKeys, setOpenKeys] = useState([] as string[]);
  const history = useHistory();
  const { pathname } = history.location;
  const pathArr = pathname.split('/');
  const selectedKeys = [`/${pathArr[1]}/${pathArr[2]}`];

  useEffect(() => {
    const openKeys = handlePathname(pathname);
    setOpenKeys(openKeys);
  }, []);

  const handleSelect = (value: { key: string }) => {
    const { key } = value;
    const openKeys = handlePathname(key);
    setOpenKeys(openKeys);
    history.push(key);
  };

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onSelect={handleSelect as any}
      onOpenChange={handleOpenChange as any}
    >
      {renderMenu(routes)}
    </Menu>
  );
};
