import {
  getLinkByHashInputProps,
  getLinkByHashOutputProps,
  getLinkByHash,
} from "@/infrastructure/mocks/hashlink.mock";

const getLinkByHashPort = async (
  query: getLinkByHashInputProps
): Promise<getLinkByHashOutputProps> => {
  return getLinkByHash(query);
};

export default {
  getLinkByHashPort,
};
