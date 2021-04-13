import {
  generateString,
  generateStringOutputProps,
} from "@/infrastructure/randomstring/index";

export const generateStringPort = (): generateStringOutputProps => {
  return generateString();
};
