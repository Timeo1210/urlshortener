import { Hashlink } from "../entities/Hashlink.entity";
import { hashlinkMapper } from "../mappers/hashlink.mapper";
import {
  getHashlinkByHashRequest,
  getHashlinkByHashResponse,
  postHashlinkRequest,
} from "@/infrastructure/repositories/interfaces/hashlink/hashlink.controller.interface";

const getHashlinkByHash = async (
  request: getHashlinkByHashRequest
): Promise<getHashlinkByHashResponse> => {
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

const postHashlink = async (request: postHashlinkRequest): Promise<void> => {
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
