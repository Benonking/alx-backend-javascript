export default function getStudentIdSum(arr) {
  const sumId = arr.reduce((total, student) => { return total + student.id; }, 0);
  return sumId;
}
