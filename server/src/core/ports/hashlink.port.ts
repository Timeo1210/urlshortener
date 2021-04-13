import {
  getLinkByHashInputProps,
  getLinkByHashOutputProps,
  getLinkByHash,
  postLinkInputProps,
  postLink,
} from "@/infrastructure/mocks/hashlink.mock";

const getLinkByHashPort = async (
  query: getLinkByHashInputProps
): Promise<getLinkByHashOutputProps> => {
  return getLinkByHash(query);
};

const postLinkPort = async (command: postLinkInputProps): Promise<void> => {
  await postLink(command);
};

export default {
  getLinkByHashPort,
  postLinkPort,
};
