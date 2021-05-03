import { BaseRequestDTO } from "../base.request.dto";

export class getLinkByHashRequestDTO extends BaseRequestDTO {
  constructor(hash: string) {
    super();
    this.hash = hash;

    this._lettersNumbersReg = /^[0-9a-zA-Z]+$/;
  }

  validate(): boolean {
    if (!!this.hash.match(this._lettersNumbersReg) && this.hash.length === 8) {
      return true;
    }
    return false;
  }

  hash: string;
  private _lettersNumbersReg: RegExp;
}
