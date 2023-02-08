// mock deptManageListDataSource
import { parse } from 'url';
import { Request, Response } from 'express';

const genList = (current: number, pageSize: number) => {
  const tableListDataSource: API.deptListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = i;
    tableListDataSource.push({
      deptId: `${index}`,
      deleteMark: 'Y',
      fullName: `${index}-部门`,
    });
  }
  return tableListDataSource;
};

let deptListDataSource = genList(1, 100);

function getDept(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  // const { current = 1, pageSize = 10 } = req.query;
  const { pageSize = 10 } = req.query;

  const params = parse(realUrl, true).query as unknown as API.TableParams & API.deptListItem;

  // let dataSource = [...deptListDataSource].slice(
  //   ((current as number) - 1) * (pageSize as number),
  //   (current as number) * (pageSize as number),
  // );
  let dataSource = [...deptListDataSource];

  if (params.fullName) {
    dataSource = dataSource.filter((data) => data?.fullName?.includes(params.fullName || ''));
  }
  const result = {
    data: dataSource,
    total: deptListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.pagination?.current}`, 10),
  };

  return res.json(result);
}

export default {
  'GET /api/dept': getDept,
};
