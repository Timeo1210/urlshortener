import randomstring from "randomstring";

export interface generateStringOutputProps {
  hash: string;
}

const generateString = (): generateStringOutputProps => {
  return {
    hash: randomstring.generate({
      length: 8,
      charset: "hex",
    }),
  };
};

export const randomstringAdapter = {
  generateString,
};
