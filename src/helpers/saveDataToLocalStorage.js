export const saveDataToLocalStorage = (nameOfTheKey, data) => {
  localStorage.setItem(
    `${nameOfTheKey}`,
    JSON.stringify({
      token: data.token,
    })
  );
};
