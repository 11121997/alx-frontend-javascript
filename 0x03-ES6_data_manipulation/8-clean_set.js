export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }

  const newSet = [];

  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const valSub = val.substring(startString.length);

      if (valSub && valSub !== val) {
        newSet.push(valSub);
      }
    }
  }
  return newSet.join('-');
}
