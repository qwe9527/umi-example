export interface IRouter {
  name: string;
  path: string;
  icon?: string;
  routes?: IRouter[];
  component?: string;
}

export interface IHeaderRouter {
  name: string;
  key: string;
  authId: number;
}

const routes: IRouter[] = [
  {
    name: '设备管理',
    icon: 'icon-monitor',
    path: '/manager',
    routes: [
      {
        name: '电表',
        path: '/manager/emeter',
      },
    ],
  },
];

export const routerTitleMap = {
  manager: '设备管理',
};

export const headerRouterMap: { [key: string]: IHeaderRouter[] } = {
  manager: [
    {
      name: '实时抄表',
      key: 'realtime',
      authId: 102010000,
    },
    {
      name: '冻结抄表',
      key: 'blocking',
      authId: 102020000,
    },
  ],
};

export default routes;
