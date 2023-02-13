// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type deptList = {
    data?: deptListItem[];
    total?: number;
    success?: boolean;
  };

  // 部门管理表格数据项
  type deptListItem = {
    deptId?: string;
    deleteMark?: string;
    fullName?: string;
    roleCodes?: string[];
  };

  type TableParams = {
    pagination?: PageParams;
    total?: number;
    sortField?: string;
    sortOrder?: string;
  };
  // {
  //   "bizorgId": "E1F091BCA06C66BBE05397D55C0A3B51",
  //   "code": "ZCWX8b454ff320161025a2e88d391051",
  //   "delState": 1,
  //   "deptName": "其他部门",
  //   "id": "ZCWX8b454ff320161025a2e88d391051",
  //   "id4a": "ZCWX8b454ff320161025a2e88d391051",
  //   "loginName": "huxiaoli@zcwx.yn.csg.cn",
  //   "name": "胡小丽",
  //   "password": "$2a$10$Egp1/gvFlt7zhlXVfEFw4OfWQCGPw0ClmMcc6FjTnvXNRVf9zdMRa",
  //   "sexCode": 1,
  //   "state": 1
  // }
  // roleCodes:[
  //   "r181cd929869",
  //   "r183f3653593"
  // ]

  // 权限管理-用户管理
  type UserList = {
    data?: permissonUserManItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }

  type permissonUserManItem = {
    id?: string;
    name?:string;
    state?:number;
    deptName?:string;
    loginName?:string;
  }
}
