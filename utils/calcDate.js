const calcDate = (date) => {
  const dateObj = new Date(date);
  if (dateObj === 'Invalid Date' || Number.isNaN(dateObj)) return null;

  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(dateObj);
  const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);

  return `${mo} ${da}, ${ye}`;
};

export default calcDate;
