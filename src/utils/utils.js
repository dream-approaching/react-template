export const saveLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getLocalStorage = key => window.localStorage.getItem(key);

export const clearLocalStorage = () => window.localStorage.clear();
