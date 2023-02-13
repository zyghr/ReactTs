import { request } from '@umijs/max';

export async function getDeptListData(params: API.TableParams) {
  return request<API.deptList>('/api/dept', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
