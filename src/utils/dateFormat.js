export const dateFormat = (date) => {
  let splitDate = date.split('-');
  return splitDate[0] + '년 ' + splitDate[1] + '월 ' + splitDate[2].slice(0, 2) + '일';
};
