import {
  getLinkByHashInputProps,
  getLinkByHashOutputProps,
  postLinkInputProps,
  hashlinkMock,
} from "@/infrastructure/mocks/hashlink.mock";

const getLinkByHashPort = async (
  query: getLinkByHashInputProps
): Promise<getLinkByHashOutputProps> => {
  return hashlinkMock.getLinkByHash(query);
};

const postLinkPort = async (command: postLinkInputProps): Promise<void> => {
  hashlinkMock.postLink(command);
};

export const hashlinkPort = {
  getLinkByHashPort,
  postLinkPort,
};
