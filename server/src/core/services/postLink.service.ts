import {
  postLinkCommandInput,
  postLinkCommandResponse,
} from "@/core/commands/postLink.command";

import HashlinkPort from "@/core/ports/hashlink.port";
import { generateStringPort } from "@/core/ports/randomstring.port";

export const postLink = async (
  command: postLinkCommandInput
): Promise<postLinkCommandResponse> => {
  const { hash } = generateStringPort();
  HashlinkPort.postLinkPort({
    link: command.link,
    hash,
  });

  return {
    redirect: `/${hash}`,
  };
};
