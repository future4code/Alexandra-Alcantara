function addZero(value: number): string | number {
  if (value <= 9) {
    return "0" + value;
  } else {
    return value;
  }
}

export const formatData = (date: Date): string => {
  const formattedDate = `${addZero(date.getDate())}/${addZero(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;

  return formattedDate;
};
