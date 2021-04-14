import { LeanDocument } from "mongoose";
import { Hashlink } from "../entities/Hashlink.entity";
import {
  HashlinkDocumentInterface,
  HashlinkInterface,
} from "../interfaces/hashlink.interface";
import { hashlinkMapper } from "../mappers/hashlink.mapper";

export interface getHashlinkByHashRequest {
  hash: string;
}

const getHashlinkByHash = async (
  request: getHashlinkByHashRequest
): Promise<HashlinkInterface | Record<string, unknown>> => {
  const hashlinkDocument = (await Hashlink.findOne({
    hash: request.hash,
  }).lean()) as LeanDocument<HashlinkDocumentInterface>;
  if (!hashlinkDocument) return {};

  const hashlinkResponse = hashlinkMapper.returnHashlinkFromLeanDocument(
    hashlinkDocument
  );
  return hashlinkResponse;
};

export interface HashlinkRequest {
  hash: string;
  url: string;
}

const postHashlink = async (request: HashlinkRequest): Promise<void> => {
  const newHashlink = new Hashlink({
    hash: request.hash,
    url: request.url,
  });
  await newHashlink.save();
};

export const hashlinkController = {
  getHashlinkByHash,
  postHashlink,
};
