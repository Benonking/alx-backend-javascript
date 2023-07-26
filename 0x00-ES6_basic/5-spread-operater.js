export default function concatArrays(array1, array2, string) {
  const concatedArrays = [...array1, ...array2, ...string];
  return concatedArrays;
}
