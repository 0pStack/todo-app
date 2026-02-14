const addToStorage = (item, key) => {
  const items = getFromStorage(key);
  items.push(item);
  localStorage.setItem(key, JSON.stringify(items));
};

const getFromStorage = (key) => {
  let items;

  if (localStorage.getItem(key) === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem(key));
  }
  return items;
};

const removeFromStorage = (item, key) => {
  let items = getFromStorage(key);
  items = items.filter((x) => x !== item);

  if (items.length === 0) {
    localStorage.removeItem(key);
  } else{
    localStorage.setItem(key, JSON.stringify(items));
  }
};

const clearStorage = (key) => {
  localStorage.removeItem(key);
};
