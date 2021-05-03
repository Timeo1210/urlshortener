import { Document } from "mongoose";
import { HashlinkEntityCommonKeys } from "@/infrastructure/repositories/interfaces/hashlink/hashlink.interface";

export interface HashlinkDocumentInterface
  extends HashlinkEntityCommonKeys,
    Document {}
