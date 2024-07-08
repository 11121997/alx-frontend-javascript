export default function getStudentIdsSum(stArr) {
  return stArr.reduce((acc, curr) => acc + curr.id, 0);
}
