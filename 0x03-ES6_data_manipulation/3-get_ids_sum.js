export default function getStudentIdSum(arr) {
  return arr.reduce((id, student) => id + student.id,0);
}
