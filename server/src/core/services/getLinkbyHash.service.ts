import {
  getLinkByHashQueryInput,
  getLinkByHashQueryResponse,
} from "@/core/queries/getLinkByHash.query";
import { hashlinkPort } from "@/core/ports/hashlink.mock.port";

const getLinkbyHash = async (
  query: getLinkByHashQueryInput
): Promise<getLinkByHashQueryResponse> => {
  return hashlinkPort.getLinkByHashPort(query);
};

export const getLinkByHashService = {
  getLinkbyHash,
};
