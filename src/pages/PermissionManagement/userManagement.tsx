import { Input,Select } from 'antd';

const userManagement: React.FC = () => {
  const handleChange = (name: string) => {
    console.log('name',name)
  }


  return (
    <div>
      {/* 搜索栏*/}
      <Input placeholder="输入用户名称或者登录账号" />
      <Select
        defaultValue="开启"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          {
            value: 'jack',
            label: '开启',
          },
          {
            value: 'lucy',
            label: '关闭',
          },
        ]}
      />
       {/*工具栏*/}

      {/*表格*/}

      {/*对话框*/}
    </div>
  )
}

export default userManagement;
