import { LeanDocument } from "mongoose";
import { HashlinkDocumentInterface } from "../interfaces/hashlink.interface.custom";
import { HashlinkInterface } from "@/infrastructure/repositories/interfaces/hashlink/hashlink.interface";

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
