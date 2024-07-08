export default function getStudentsByLocation(stArr, city) {
  return stArr.filter((el) => el.location === city);
}
