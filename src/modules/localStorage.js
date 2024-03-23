const addToLocalStorage = (value) => {
  localStorage.setItem('CityName', JSON.stringify(value));
};

const getToLoclStorage = () => {
  const fromLocalStorage = JSON.parse(localStorage.getItem('CityName'));
  return fromLocalStorage;
};

export { addToLocalStorage, getToLoclStorage };
