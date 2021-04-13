import {
  getLinkByHashQueryInput,
  getLinkByHashQueryResponse,
} from "@/core/queries/getLinkByHash.query";
import HashlinkPort from "@/core/ports/hashlink.port";

export const getLinkbyHash = async (
  query: getLinkByHashQueryInput
): Promise<getLinkByHashQueryResponse> => {
  return HashlinkPort.getLinkByHashPort(query);
};
