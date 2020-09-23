import React from 'react';
import { Location } from 'umi';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface ILayoutProps {
  location: Location;
  children: React.ReactNode;
}

export default (props: ILayoutProps) => {
  if (props.location.pathname === '/login') {
    return <div className="container clearfix">{props.children}</div>;
  }
  return (
    <ConfigProvider locale={zhCN}>
      <div className="container">
        <Sidebar />
        <div className="content" id="content">
          <Header />
          <div className="children">
            {props.children}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};
