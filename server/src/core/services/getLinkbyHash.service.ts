import {
  getLinkByHashQueryInput,
  getLinkByHashQueryResponse,
} from "@/core/queries/getLinkByHash.query";
// import { hashlinkPort } from "@/core/ports/hashlink.mock.port";
import { hashlinkPort } from "@/core/ports/hashlink.mongodb.port";

const getLinkbyHash = async (
  query: getLinkByHashQueryInput
): Promise<getLinkByHashQueryResponse> => {
  return hashlinkPort.getLinkByHash(query);
};

export const getLinkByHashService = {
  getLinkbyHash,
};
