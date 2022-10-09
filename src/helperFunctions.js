const saveToLocalStorage = (name, data) => {
  const dataString = JSON.stringify(data);

  localStorage.setItem(name, dataString);
};

const swap = (array, index1, index2) => {
  const value1 = array[index1];

  array[index1] = array[index2];

  array[index2] = value1;
};

const randomizeArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, randomIndex, i);
  }
};

export { saveToLocalStorage, randomizeArray };
