import {
  getLinkByHashInputProps,
  getLinkByHashOutputProps,
  postLinkInputProps,
  hashlinkMock,
} from "@/infrastructure/mocks/hashlink.mock";

const getLinkByHash = async (
  query: getLinkByHashInputProps
): Promise<getLinkByHashOutputProps> => {
  return hashlinkMock.getLinkByHash(query);
};

const postLink = async (command: postLinkInputProps): Promise<void> => {
  hashlinkMock.postLink(command);
};

export const hashlinkPort = {
  getLinkByHash,
  postLink,
};
