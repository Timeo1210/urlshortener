import { mongodbRepository } from "./mongodb/config";
import { postgresqlRepository } from "./postgresql/config";

export const initRepositories = {
  init: async (): Promise<void> => {
    await mongodbRepository.run();
    await postgresqlRepository.run();
  },
};
