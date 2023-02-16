import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { getUserList } from '@/services/API/permissManagement/userManagement';

const userManagement: React.FC = () => {
  const columns: ProColumns<API.permissonUserManItem>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '用户名',
      dataIndex: 'name',
      tip: '唯一标识',
    },
    {
      title: '部门',
      dataIndex: 'deptName',
    },
    {
      title: '登录账号',
      dataIndex: 'loginName',
    },
  ];

  return (
    <ProTable<API.permissonUserManItem, API.PageParams>
      rowKey="id"
      headerTitle="权限-用户管理"
      search={{ labelWidth: 80 }}
      request={getUserList}
      columns={columns}
      scroll={{ scrollToFirstRowOnChange: true, y: '40vh' }}
    />
  );
};

export default userManagement;
