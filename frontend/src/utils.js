// DONE
export const customizeDate = (date) => {
  const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
  return `${days[date.getDay()]}, ${date.toLocaleDateString()}`;
};
