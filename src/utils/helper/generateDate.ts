export const generateDateRange = () => {
  const today = new Date();
  const dateRange = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dateRange.push(date.toISOString().split("T")[0]);
  }

  return dateRange;
};
