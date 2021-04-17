import { Hashlink } from "../entities/Hashlink.entity";
import { HashlinkInterface } from "../controllers/hashlink.controller";

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
