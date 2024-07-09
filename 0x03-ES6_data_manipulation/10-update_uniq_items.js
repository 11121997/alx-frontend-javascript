export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  items.forEach((val, key) => {
    if (val === 1) {
      items.set(key, 100);
    }
  });
}
