const loading = (bool) => {
  console.log(bool);
  return bool
    ? {
        type: "SHOW_LOADER_ACTION",
        data: bool,
      }
    : {
        type: "HIDE_LOADER_ACTION",
        data: bool,
      };
};

export default loading;
