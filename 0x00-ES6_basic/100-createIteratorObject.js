export default function createIteratorObject(reports) {
  let iterable = [];
  if (!reports.allEmployees || typeof reports.allEmployees !== 'object') {
    return iterable;
  }
  iterable = {
    * [Symbol.iterator]() {
      for (const val of Object.values(reports.allEmployees)) {
        for (const i of val) {
          yield i;
        }
      }
    },
  };
  return iterable;
}
