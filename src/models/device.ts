import { Effect, ImmerReducer, Subscription } from 'umi';
import produce from 'immer';
import modelExtend from 'dva-model-extend';
import baseModel from '@/models/baseModel';

interface IDataSource {
  emeter: any[]
}

export interface IDeviceModelState {
  mange: IDataSource,
  cost: IDataSource
}

export interface IDeviceModelType {
  state: IDeviceModelState,
  reducer: ImmerReducer<IDeviceModelState>,
  effects: {
    handleGetDevices: Effect;
  },
  subscriptions: { setup: Subscription };
}

const initState: IDataSource = {
  emeter: []
};

const deviceModel: IDeviceModelType = {
  namespace: 'device',

  state: {
    mange: initState,
    cost: initState
  },

  reducers: {

  },

  effects: {
    *handleGetDevices() {

    }
  },

  subscriptions: {},
}

export default modelExtend(baseModel, deviceModel);
