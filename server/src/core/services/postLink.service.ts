import {
  postLinkCommandInput,
  postLinkCommandResponse,
} from "@/core/commands/postLink.command";

// import { hashlinkPort } from "@/core/ports/hashlink.mock.port";
import { hashlinkPort } from "@/core/ports/hashlink.mongodb.port";
import { randomstringPort } from "@/core/ports/randomstring.port";

const postLink = async (
  command: postLinkCommandInput
): Promise<postLinkCommandResponse> => {
  const { hash } = randomstringPort.generateStringPort();
  await hashlinkPort.postLink({
    link: command.link,
    hash,
  });

  return {
    redirect: `/${hash}`,
  };
};

export const postLinkService = {
  postLink,
};
