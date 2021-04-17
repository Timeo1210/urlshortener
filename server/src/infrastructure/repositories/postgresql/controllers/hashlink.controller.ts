import { Hashlink } from "../entities/Hashlink.entity";
import { hashlinkMapper } from "../mappers/hashlink.mapper";

export interface HashlinkInterface {
  id: number;
  hash: string;
  link: string;
}

export interface getHashlinkByHashRequest {
  hash: string;
}

const getHashlinkByHash = async (
  request: getHashlinkByHashRequest
): Promise<HashlinkInterface | Record<string, never>> => {
  const hashlinkQuery = await Hashlink.findOne({
    where: {
      hash: request.hash,
    },
  });
  if (!hashlinkQuery) return {};

  const hashlinkResponse = hashlinkMapper.returnHashlinkFromQuery(
    hashlinkQuery
  );

  return hashlinkResponse;
};

export interface HashlinkRequest {
  hash: string;
  link: string;
}

const postHashlink = async (request: HashlinkRequest): Promise<void> => {
  const newHashlink = Hashlink.build({
    hash: request.hash,
    url: request.link,
  });
  await newHashlink.save();
};

export const hashlinkController = {
  getHashlinkByHash,
  postHashlink,
};
