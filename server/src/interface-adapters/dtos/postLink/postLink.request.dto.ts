import { BaseRequestDTO } from "../base.request.dto";
import validUrl from "valid-url";

export class postLinkRequestDTO extends BaseRequestDTO {
  constructor(link: string) {
    super();

    this.link = link;
  }

  validate(): boolean {
    return !!validUrl.isWebUri(this.link) && this.link.length < 300;
  }

  link: string;
}
