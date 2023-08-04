export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let call = weakMap.get(endpoint) || 0;

  call += 1;

  weakMap.set(endpoint, call);

  if (call >= 5) {
    throw Error('Endpoint load is high');
  }

  return call;
}
