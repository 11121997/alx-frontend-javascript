export default function getStudentsByLocation(students_arr, city) {
  return students_arr.filter((el) => el.location === city);
}
