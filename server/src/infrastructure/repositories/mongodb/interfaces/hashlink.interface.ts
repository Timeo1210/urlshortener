import { Document } from "mongoose";

interface HashlinkCommonKeys {
  hash: string;
}

export interface HashlinkInterface extends HashlinkCommonKeys {
  id: string;
  link: string;
}

export interface HashlinkDocumentInterface
  extends HashlinkCommonKeys,
    Document {
  url: string;
}
