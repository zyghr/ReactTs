import { Button, Table } from 'antd';
import type { PaginationProps } from 'antd';
import { useState, useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { getDeptListData } from '@/services/ant-design-pro/deptManageApi';

const columns: ColumnsType<API.deptListItem> = [
  {
    title: '部门名称',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: '状态',
    dataIndex: 'deleteMark',
    key: 'deleteMark',
  },
  {
    title: '操作',
    key: 'action',
    render: () => <Button type="primary">角色分配</Button>,
  },
];

const DeptTable: React.FC = () => {
  const [data, setData] = useState<API.deptListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState<API.TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      getDeptListData(params).then((res) => {
        setData(res?.data || []);
        setParams({
          ...params,
          total: res?.total,
        });
        setLoading(false);
      });
    };

    fetchData();
  }, [params?.pagination]);

  const onPageChange: PaginationProps['onChange'] = (page,pageSize) => {
    console.log(page);
    console.log(pageSize)
    setParams({
      pagination: { current: page,pageSize: pageSize}
    });
  };

  return (
    <Table
      rowKey="deptId"
      dataSource={data}
      columns={columns}
      loading={loading}
      scroll={{scrollToFirstRowOnChange:true,y:'62vh'}}
      pagination={
        {
          hideOnSinglePage: true,
          current: params?.pagination?.current,
          pageSize:params?.pagination?.pageSize,
          total: data?.length,
          showTotal: total => `总共${total}条`,
          onChange:onPageChange
        }}
    />
  );
};

export default DeptTable;
