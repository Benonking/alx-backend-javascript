export default function iterateThroughObject(reportWithIterator) {
  const empNames = [];
  for (const name of reportWithIterator) {
    empNames.push(name);
  }
  return empNames.join(' | ');
}
