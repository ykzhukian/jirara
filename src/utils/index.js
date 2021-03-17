export const cleanObject = (obj) => {
  const result = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value === 0 || value) {
      result[key] = value;
    }
  });
  return result;
};
