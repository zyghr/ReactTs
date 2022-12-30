import React from 'react'

import { Button, Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';

const dataSource = [
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BC8EC566BBE05397D55C0A3B51",
    "enCode": "E1F091BC8EC566BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "财务管理部",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BC8EC566BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\财务管理部\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": [
      "juse1",
      "admin",
      "r181d6718ee4",
      "r1826ce1fe52",
      "r182c51ce8e7",
      "r181cd93cede",
      "r181cd914149",
      "r181cd93aebc",
      "r181cd95b9bd"
    ]
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BC901366BBE05397D55C0A3B51",
    "enCode": "E1F091BC901366BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "大数据中心（期刊编辑部）",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BC901366BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\大数据中心（期刊编辑部）\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": [
      null,
      null,
      null,
      null,
      null,
      "juse1"
    ]
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BC946E66BBE05397D55C0A3B51",
    "enCode": "E1F091BC946E66BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "电力规划中心",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BC946E66BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\电力规划中心\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": [
      null,
      null,
      "juse1",
      "r1826ce3165c"
    ]
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BC963066BBE05397D55C0A3B51",
    "enCode": "E1F091BC963066BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "监督部（纪委办公室）",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BC963066BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\监督部（纪委办公室）\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": [
      "juse1"
    ]
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BC988466BBE05397D55C0A3B51",
    "enCode": "E1F091BC988466BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "新能源研究所",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BC988466BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\新能源研究所\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": [
      "juse1"
    ]
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BC9DB866BBE05397D55C0A3B51",
    "enCode": "E1F091BC9DB866BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "能源战略与政策研究所",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BC9DB866BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\能源战略与政策研究所\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": [
      "r181a9042eec"
    ]
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BCBE5F66BBE05397D55C0A3B51",
    "enCode": "E1F091BCBE5F66BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "计划生产部",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BCBE5F66BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\计划生产部\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BCC39F66BBE05397D55C0A3B51",
    "enCode": "E1F091BCC39F66BBE05397D55C0A3B51",
    "fullName": "南方电网公司出资企业专职董事监事",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BCC39F66BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\南方电网公司出资企业专职董事监事\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BCC63666BBE05397D55C0A3B51",
    "enCode": "E1F091BCC63666BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "党建工作部（工会办公室）",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BCC63666BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\党建工作部（工会办公室）\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BCD13066BBE05397D55C0A3B51",
    "enCode": "E1F091BCD13066BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "人力资源部",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BCD13066BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\人力资源部\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BCE98266BBE05397D55C0A3B51",
    "enCode": "E1F091BCE98266BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "投资与财务研究所",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BCE98266BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\投资与财务研究所\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BCF01966BBE05397D55C0A3B51",
    "enCode": "E1F091BCF01966BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "国际合作研究所（澜湄研究中心办公室）",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BCF01966BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\国际合作研究所（澜湄研究中心办公室）\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BD080566BBE05397D55C0A3B51",
    "enCode": "E1F091BD080566BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "南方电网改革发展研究中心",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BD080566BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\南方电网改革发展研究中心\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BD097D66BBE05397D55C0A3B51",
    "enCode": "E1F091BD097D66BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "办公室（董事会办公室、党委办公室）",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BD097D66BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\办公室（董事会办公室、党委办公室）\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BD09BB66BBE05397D55C0A3B51",
    "enCode": "E1F091BD09BB66BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "技术经济中心（定额站）",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BD09BB66BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\技术经济中心（定额站）\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BD0D6966BBE05397D55C0A3B51",
    "enCode": "E1F091BD0D6966BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "南方电网公司专家委员会",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BD0D6966BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\南方电网公司专家委员会\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BD10FF66BBE05397D55C0A3B51",
    "enCode": "E1F091BD10FF66BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "企业管理研究所",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BD10FF66BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\企业管理研究所\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BD174166BBE05397D55C0A3B51",
    "enCode": "E1F091BD174166BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "总师组",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BD174166BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\总师组\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BD1FEA66BBE05397D55C0A3B51",
    "enCode": "E1F091BD1FEA66BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "咨询评审中心",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BD1FEA66BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\咨询评审中心\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BD23E866BBE05397D55C0A3B51",
    "enCode": "E1F091BD23E866BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "领导班子",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BD23E866BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\领导班子\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BD25E766BBE05397D55C0A3B51",
    "enCode": "E1F091BD25E766BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "工程管理咨询中心（质监站）",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BD25E766BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\工程管理咨询中心（质监站）\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  },
  {
    "childNum": 0,
    "deleteMark": "Y",
    "deptId": "E1F091BE901366BBE05397D55C0A3B51",
    "enCode": "E1F091BE901366BBE05397D55C0A3B51",
    "enabledMark": 1,
    "fullName": "其它",
    "orgIdPath": "\\E1F091BCDE7466BBE05397D55C0A3B51\\E1F091BCEC6A66BBE05397D55C0A3B51\\E1F091BE901366BBE05397D55C0A3B51\\",
    "orgPath": "\\中国南方电网有限责任公司\\南方电网能源发展研究院有限责任公司\\其它\\",
    "pid": "E1F091BCEC6A66BBE05397D55C0A3B51",
    "roleCodes": []
  }
]

const columns = [
  {
    title: '部门名称',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: '状态',
    dataIndex: 'enabledMark',
    key: 'enabledMark',
  },
  {
    title: '操作',
    // dataIndex: 'address',
    key: 'action',
    render: () => (
      <Button type="primary">角色分配</Button>
    )
  },
];
const DeptTable: React.FC = () => {
  return <Table dataSource={dataSource} columns={columns}/>
}

export default DeptTable;
