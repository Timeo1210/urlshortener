import { getLinkbyHash } from "@/core/services/getLinkbyHash.service";
import { postLink } from "@/core/services/postLink.service";

(async () => {
  console.log("getLinkByHash:", await getLinkbyHash({ hash: "hhhhhhhh" }));
  console.log("postLink:", await postLink({ link: "https://youtube.com" }));
})();
