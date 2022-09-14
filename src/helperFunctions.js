const saveToLocalStorage = (name, data) => {
  const dataString = JSON.stringify(data);

  localStorage.setItem(name, dataString);
};

export { saveToLocalStorage };
