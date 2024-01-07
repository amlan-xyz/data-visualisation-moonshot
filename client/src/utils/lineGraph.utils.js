export function filterFields(data, input) {
  const fieldName = input; // Assuming input is a string representing the field name
  return data.map((item) => ({
    Day: item.Day,
    [fieldName]: item[fieldName], // Access the field dynamically using bracket notation
  }));
}

export function extractValuesToArrays(filteredData) {
  const days = [];
  const fieldValues = [];

  filteredData.forEach((item) => {
    days.push(item.Day);
    fieldValues.push(item[Object.keys(item)[1]]); // Access the second field's value
  });

  return { days, fieldValues };
}
