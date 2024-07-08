export default function updateStudentGradeByCity(stArr, city, newGrades) {
  return stArr
    .filter((el) => el.location === city)
    .map((st) => {
      const grades = newGrades.filter((e) => e.studentId === st.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...st,
        grade,
      };
    });
}
