export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr) !== true) return [];
  const filterByLocation = arr.filter((student) => {
    if (student.location === city) {
      return student;
    }
  });
  return filterByLocation;
}
