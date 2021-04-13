export class getLinkByHashRequestDTO {
  constructor(hash: string) {
    this.hash = hash;
  }

  hash: string;
}
