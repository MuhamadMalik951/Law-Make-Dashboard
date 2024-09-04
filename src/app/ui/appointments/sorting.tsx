export const sortItems = (
  sort: string,
  array: Array<{
    name: string;
    location: { city: string; area: string };
    img: string;
    to: { time: string; date: string };
    from: { time: string; date: string };
    service: string;
    status: string;
  }>
) => {
  return [...array].sort((a, b) => {
    if (sort.toLowerCase() === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sort.toLowerCase() === 'name-desc') {
      return b.name.localeCompare(a.name);
    } else if (sort.toLowerCase() === 'date-asc') {
      return new Date(a.from.date).getTime() - new Date(b.from.date).getTime();
    } else if (sort.toLowerCase() === 'date-desc') {
      return new Date(b.from.date).getTime() - new Date(a.from.date).getTime();
    } else {
      return 0; 
    }
  });
};


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
