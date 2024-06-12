export const slugifyString = (string: string) => {
  const result = string
    .split(" ")
    .map((w) => w.toLowerCase())
    .join("-");

  return result;
};
