import {
  hashlinkController,
  getHashlinkByHashRequest,
  HashlinkRequest,
} from "@/infrastructure/repositories/mongodb/controllers/hashlink.controller";

interface getLinkByHashResponseProps {
  link: string;
}

const getLinkByHash = async (
  query: getHashlinkByHashRequest
): Promise<getLinkByHashResponseProps> => {
  const queryValue = await hashlinkController.getHashlinkByHash(query);

  return {
    link: Object.keys(queryValue).length === 0 ? "" : queryValue.link,
  };
};

const postLink = async (command: HashlinkRequest): Promise<void> => {
  await hashlinkController.postHashlink(command);
};

export const hashlinkPort = {
  getLinkByHash,
  postLink,
};
