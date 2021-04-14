import { LeanDocument } from "mongoose";
import {
  HashlinkDocumentInterface,
  HashlinkInterface,
} from "../interfaces/hashlink.interface";
import {} from "../entities/Hashlink.entity";

const returnHashlinkFromLeanDocument = (
  hashlinkQuery: LeanDocument<HashlinkDocumentInterface>
): HashlinkInterface => {
  return {
    id: hashlinkQuery?._id.toString(),
    hash: hashlinkQuery.hash,
    link: hashlinkQuery.url,
  };
};

export const hashlinkMapper = {
  returnHashlinkFromLeanDocument,
};
