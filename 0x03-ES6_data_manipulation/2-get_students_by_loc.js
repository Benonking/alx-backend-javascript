export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr) !== true) return [];
  return arr.filter((student) => student.location === city)
}
