export const validation = (phone, amount) => {
  const number = Number(amount);

  if (phone.length !== 11) {
    return false;
  }
  if (number < 1 || number > 1000) {
    return false;
  }

  return true;
};
