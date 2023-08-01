export default function getStudentIdSum(arr) {
  return arr.reduce((id, student) => { return id + student.id; }, 0);
}
