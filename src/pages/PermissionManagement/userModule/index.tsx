import {
  PageContainer,

  ProTable,
} from '@ant-design/pro-components';
import {getUserList} from '@/services/API/permissManagement/userManagement'
import { FormattedMessage} from '@umijs/max';
import type { ProColumns } from '@ant-design/pro-components';

const userManagement: React.FC = () => {
  const columns: ProColumns<API.permissonUserManItem>[] = [
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.nameLabel"
          defaultMessage="用户名"
        />
      ),
      dataIndex: 'name'
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleDesc" defaultMessage="Description" />,
      dataIndex: 'deptName',
      valueType: 'textarea',
    }
  ]

  return (
    <PageContainer>
      <ProTable<API.permissonUserManItem, API.PageParams>
        headerTitle = "权限-用户管理"
        search={{labelWidth: 120,}}
        request={getUserList}
        columns={columns}
      />
    </PageContainer>
  )
}

export default userManagement;
