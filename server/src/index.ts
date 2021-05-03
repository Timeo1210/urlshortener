import "dotenv-safe/config";

import { initControllers } from "@/interface-adapters/controllers/init";
import { initRepositories } from "@/infrastructure/repositories/init";

(async () => {
  await initRepositories.init();
  await initControllers.init();
})();
