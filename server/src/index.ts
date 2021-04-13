import { getLinkbyHash } from "@/core/services/getLinkbyHash.service";

(async () => {
  console.log("OUTPUT:", await getLinkbyHash({ hash: "hhhhhhhh" }));
})();
