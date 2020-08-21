export default (key, setIsModalShow) => {
  setIsModalShow((prevState) => ({
    ...prevState,
    [key]: true,
  }));
};