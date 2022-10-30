export const saveLocalData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
export const getLocalData = (key) => {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);
  return data;
};

export const removeLocalData = (key) => {
  localStorage.removeItem(key);
};
