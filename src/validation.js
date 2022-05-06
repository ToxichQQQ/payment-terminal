export const validation = (phone, amount) => {
  const number = Number(amount);

   if (phone.match('^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$') === null){
     return false
   }

  if (phone.length !== 11) {
    return false;
  }
  if (number < 1 || number > 1000) {
    return false;
  }

  return true;
};
