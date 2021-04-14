import { getLinkByHashService } from "@/core/services/getLinkbyHash.service";
import { postLinkService } from "@/core/services/postLink.service";

import { initControllers } from "@/interface-adapters/controllers/init";
import { initRepositories } from "@/infrastructure/repositories/init";

import { hashlinkController } from "@/infrastructure/repositories/mongodb/controllers/hashlink.controller";

(async () => {
  initControllers.init();
  initRepositories.init();
  console.log(
    "getLinkByHash:",
    await getLinkByHashService.getLinkbyHash({ hash: "hhhhhhhh" })
  );
  console.log(
    "postLink:",
    await postLinkService.postLink({ link: "https://youtube.com" })
  );

  const generate = await postLinkService.postLink({
    link: "https://www.codecademy.com/",
  });
  console.log(
    "generate:",
    await getLinkByHashService.getLinkbyHash({
      hash: generate.redirect.slice(1, 8 + 1),
    })
  );

  await hashlinkController.postHashlink({
    hash: "randommm",
    url: "https://hello.com",
  });
  await hashlinkController.getHashlinkByHash({ hash: "randommm" });
})();
