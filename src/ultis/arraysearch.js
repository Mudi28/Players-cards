export const arraySearch = (array, keyword) => {
  const searchTerm = keyword.toLowerCase();

  return array.filter((value) => {
    return (
      value.name.toLowerCase().match(new RegExp(searchTerm, "g")) ||
      value.team.toLowerCase().match(new RegExp(searchTerm, "g"))
    );
  });
};
