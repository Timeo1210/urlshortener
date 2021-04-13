import randomstring from "randomstring";

export interface generateStringOutputProps {
  hash: string;
}

export const generateString = (): generateStringOutputProps => {
  return {
    hash: randomstring.generate({
      length: 8,
      charset: "hex",
    }),
  };
};
