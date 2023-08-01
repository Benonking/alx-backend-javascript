export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((student) => student.location === city).map((student) => {
    const newStudent = student;
    newStudent.grade = 'N/A';
    for (const grade of newGrades) {
      if (newStudent.id === grade.studentId) {
        newStudent.grade = grade.grade;
      }
    }
    return newStudent;
  });
}
