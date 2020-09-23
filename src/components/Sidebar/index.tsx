import React from 'react';
import './index.less';
import defaultLogo from '@/assets/logo.png';
import { Tooltip } from 'antd';
import { useModel } from 'umi';
import RouterMenu from '@/components/Sidebar/routeMenu';

export default () => {

  return (
    <div className="sidebar">
      <Tooltip title={ '123'} placement="right">
        <div className="logo-wrap">
          ant design
        </div>
      </Tooltip>
      <RouterMenu />
    </div>
  );
};
