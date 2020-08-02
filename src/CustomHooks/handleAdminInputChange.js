export default (lang, key, value, setForm) => {
  setForm((prevState) => ({
    ...prevState,
    [lang]: {
      ...prevState[lang],
      [key]: value
    }
  }));
};