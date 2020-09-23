/**
 * request 网络请求工具
 */
import { extend, ResponseError } from 'umi-request';
import { message, notification } from 'antd';
import docCookies from '@/utils/docCookies';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError): Response => {
  const { response, message: msg, name, stack } = error;
  if (name === 'AppError') {
    if (stack == '203' || stack === '403' || msg.indexOf('Token') > -1) {
      message.error('用户身份已失效，需要重新登录');
      docCookies.removeItem('emeter');
      if (window.location.pathname !== '/login') {
        window.location.reload(true);
      }
    } else {
      message.error(msg);
    }
  } else {
    if (response && response.status) {
      const errorText = codeMessage[response.status] || response.statusText;
      const { status, url } = response;

      notification.error({
        message: `请求错误 ${status}: ${url}`,
        description: errorText,
      });
    } else if (!response) {
      notification.error({
        description: '您的网络发生异常，无法连接服务器',
        message: '网络异常',
      });
    }
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler,
  credentials: 'omit'
});

request.use(async (ctx, next) => {
  const {req} : {req: any} = ctx;
  req.options.headers.token = window.token;
  await next();
  const { res } = ctx;
  if (res && res.code !== '0') {
    const err = new Error();
    err.message = res.msg;
    err.stack = res.msg;
    err.name = 'AppError';
    throw err;
  }
});

export default request;
