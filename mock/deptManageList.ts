// mock deptManageListDataSource
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: API.deptListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      deptId: `${index}`,
      deleteMark: 'Y',
      fullName: `${index}-部门`,
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};
