export default function appendToEachArrayValue(array, appendString) {
  const newArr = array;
  for (const val of array) {
    const idx = array.indexOf(val);
    newArr[idx] = appendString + val;
  }

  return newArr;
}
