export const weakmap = new weakMap();

export function queryAPI(endPoint) {
  const call = weakmap.get(endPoint) || 0;
  call += 1;

  weakmap.set(endPoint, call);

  if (call >= 5) {
    throw new Error('Endpoint load is high');
  }
  return call;
}
