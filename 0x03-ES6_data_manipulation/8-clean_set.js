export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  const arr = [];
  for (const el of set.values()) {
    if (el.startsWith(startString)) {
      const elsub = el.substring(startString.length);

      if (elsub && elsub !== el) arr.push(elsub);
    }
  }
  return arr.join('-');
}
