export const convertToNumber = (text: string, charactersToCut: number) => {
  const numericString = text.substring(charactersToCut);
  const numericValue = parseInt(numericString);

  return numericValue;
};

export const isNotEmpty = (value: string) => value.trim() !== "";
export const isEmail = (value: string) => value.includes("@");
