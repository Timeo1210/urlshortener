import validUrl from "valid-url";

export const urlValidation = (value: string): boolean => {
  return !!validUrl.isWebUri(value) && value.length < 300;
};

const lettersNumbersReg = /^[0-9a-zA-Z]+$/;
export const hashValidation = (value: string): boolean => {
  if (!!value.match(lettersNumbersReg) && value.length === 8) return true;
  return false;
};
