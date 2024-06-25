export default function createIteratorObject(report) {
  let res = [];
  for (const val of Object.values(report.allEmployees)) {
    res = [...res, ...val];
  }

  return res;
}
