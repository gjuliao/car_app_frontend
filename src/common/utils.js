const getCurrentDate = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return `${year}`;
};
export default getCurrentDate;
