import { Hashlink } from "../entities/Hashlink.entity";
import { HashlinkInterface } from "@/infrastructure/repositories/interfaces/hashlink/hashlink.interface";

const returnHashlinkFromQuery = (query: Hashlink): HashlinkInterface => {
  return {
    id: query.id,
    hash: query.hash,
    link: query.url,
  };
};

export const hashlinkMapper = {
  returnHashlinkFromQuery,
};
