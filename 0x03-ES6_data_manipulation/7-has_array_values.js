export default function hasValuesFromArray(set, arr) {
  for (const e of arr) {
    if (!set.has(e)) return false;
  }
  return true;
}
