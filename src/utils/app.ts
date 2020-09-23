
interface IFilterAuth {
  (data: [], authId: number): [];
}
interface IAuth {
  id: number;
  name: string;
  children: [];
}
/**
 * 过滤某个权限
 * @param data
 * @param authId
 * @returns {*}
 */
export const filterAuth: IFilterAuth = (data = [], authId) => {
  const auth: IAuth = data.filter(({ id }) => authId === id)[0];
  if (auth) {
    return auth.children || [];
  }
  return [];
};
