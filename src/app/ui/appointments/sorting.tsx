export const sortItems = (
  sort: string,
  array: Array<{
    name: string;
    location: { city: string; area: string };
    img: string;
    to: { time: string; date: any };
    from: { time: string; date: any };
    service: string;
    status: string;
  }>
) =>
  [...array].sort((a, b) => {
    if (sort.toLowerCase() === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sort.toLowerCase() === 'name-desc') {
      return b.name.localeCompare(a.name);
    } else if (sort.toLowerCase() === 'date-asc') {
      return array.sort((a, b) => new Date(a.from.date) - new Date(b.to.date));
    } else if (sort.toLowerCase() === 'date-desc') {
      return array.sort((a, b) => new Date(a.from.date) - new Date(b.to.date));
    } else return array;
  });

export const filterItems = (
  status: string,
  array: Array<{
    name: string;
    location: { city: string; area: string };
    img: string;
    to: { time: string; date: any };
    from: { time: string; date: any };
    service: string;
    status: string;
  }>
) => {
  return [...array].filter((item) => item.status.toLowerCase() === status);
};
