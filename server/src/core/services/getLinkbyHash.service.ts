import {
  getLinkByHashQueryInput,
  getLinkByHashQueryResponse,
} from "@/core/queries/getLinkByHash.query";
import HashlinkPort from "@/core/ports/hashlink.port";

const getLinkbyHash = async (
  query: getLinkByHashQueryInput
): Promise<getLinkByHashQueryResponse> => {
  return HashlinkPort.getLinkByHashPort(query);
};

export { getLinkbyHash };
