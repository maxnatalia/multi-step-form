export const convertToNumber = (text: string, charactersToCut: number) => {
  const numericString = text.substring(charactersToCut);
  const numericValue = parseInt(numericString);

  return numericValue;
};
