import { HashlinkInterface } from "./hashlink.interface";

export interface getHashlinkByHashRequest {
  hash: string;
}

export type getHashlinkByHashResponse =
  | HashlinkInterface
  | Record<string, never>;

export interface postHashlinkRequest {
  hash: string;
  link: string;
}
