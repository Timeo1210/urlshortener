import { mongodbRepository } from "./mongodb/config";

export const initRepositories = {
  init: (): void => {
    mongodbRepository.run();
  },
};
