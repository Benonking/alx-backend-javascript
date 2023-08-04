export default function cleanSet(set, startString) {
  const string = [];

  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  for (const el of set) {
    if (el && el.startsWith(startString)) {
      string.push(el.slice(startString.length));
    }
  }
  return string.join('-');
}
