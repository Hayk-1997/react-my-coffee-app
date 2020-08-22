export default (field, lang, icon, setForm) => {
  setForm((prevState) => ({
    ...prevState,
    [lang]: {
      ...prevState[lang],
      [field]: {
        ...prevState[lang][field],
        icon
      }
    }
  }));
};