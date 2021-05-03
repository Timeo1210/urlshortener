export interface HashlinkEntityCommonKeys {
  hash: string;
  url: string;
}

export interface HashlinkInterface {
  id: string | number;
  hash: string;
  link: string;
}
