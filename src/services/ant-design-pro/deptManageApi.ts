import { request } from '@umijs/max';

// 获取部门管理列表数据
export async function getDeptListData(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key:string]:any }
) {
  return request<API.deptList>
}
