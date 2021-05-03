import { LeanDocument } from "mongoose";
import { Hashlink } from "../entities/Hashlink.entity";
import { HashlinkDocumentInterface } from "../interfaces/hashlink.interface.custom";
import { hashlinkMapper } from "../mappers/hashlink.mapper";
import {
  getHashlinkByHashRequest,
  getHashlinkByHashResponse,
  postHashlinkRequest,
} from "@/infrastructure/repositories/interfaces/hashlink/hashlink.controller.interface";

const getHashlinkByHash = async (
  request: getHashlinkByHashRequest
): Promise<getHashlinkByHashResponse> => {
  const hashlinkDocument = (await Hashlink.findOne({
    hash: request.hash,
  }).lean()) as LeanDocument<HashlinkDocumentInterface>;
  if (!hashlinkDocument) return {};

  const hashlinkResponse = hashlinkMapper.returnHashlinkFromLeanDocument(
    hashlinkDocument
  );
  return hashlinkResponse;
};

const postHashlink = async (request: postHashlinkRequest): Promise<void> => {
  const newHashlink = new Hashlink({
    hash: request.hash,
    url: request.link,
  });
  await newHashlink.save();
};

export const hashlinkController = {
  getHashlinkByHash,
  postHashlink,
};
