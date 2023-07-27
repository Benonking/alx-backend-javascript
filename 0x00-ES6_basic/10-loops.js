export default function appendToEachArrayValue(array, appendString) {
  const arry = [];
  for (const idx of array) {
    arry.push(appendString + idx);
  }

  return arry;
}
