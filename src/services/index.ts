import {
  getPermissionUrl,
  loginUrl,
} from './urls';
import request from '@/utils/request';

export interface ILoginProps {
  username: string,
  password: string
}

export interface IPermissionParams {
  roleId: string | undefined
}

export const login = (data: ILoginProps) => request.post(loginUrl, {data});

export const getPermission = (params: IPermissionParams) => request.get(getPermissionUrl, {params});
