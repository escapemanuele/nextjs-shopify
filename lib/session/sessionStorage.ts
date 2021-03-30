
export const getItemFromStorage = (token: string) => {
  if (window && window.sessionStorage) {
    return window.sessionStorage.getItem(token);
  }

  return null;
};

export const setItemInStorage = (token: string, id: string | number) => {
  if (window && window.sessionStorage) {
      return window.sessionStorage.setItem(token, id + '');
  }
};