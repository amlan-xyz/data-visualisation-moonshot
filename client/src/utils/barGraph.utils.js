export function separateKeysAndValues(data) {
  const keys = [];
  const values = [];

  for (const [key, value] of Object.entries(data)) {
    keys.push(key);
    values.push(value);
  }

  return { keys, values };
}

export function sumValuesByKey(data) {
  const results = {};

  data.forEach((item) => {
    Object.entries(item).forEach(([key, value]) => {
      results[key] = (results[key] || 0) + Number(value); // Convert value to number
    });
  });

  return results;
}

export function removeDayAgeGender(data) {
  const newData = data.map((item) => {
    const { Day, Age, Gender, ...rest } = item;
    return rest;
  });
  return newData;
}
