import {
  randomstringAdapter,
  generateStringOutputProps,
} from "@/infrastructure/adapters/randomstring/randomstring.adapter";

const generateStringPort = (): generateStringOutputProps => {
  return randomstringAdapter.generateString();
};

export const randomstringPort = {
  generateStringPort,
};
