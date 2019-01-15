export const saveLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getLocalStorage = key => window.localStorage.getItem(key);

export const clearLocalStorage = () => window.localStorage.clear();

// 深度对比两个对象是否相等
export const isEqual = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => isEqual(a[k], b[k]));
};
