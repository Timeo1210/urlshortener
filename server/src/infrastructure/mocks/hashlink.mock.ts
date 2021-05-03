export interface getLinkByHashInputProps {
  hash: string;
}
export interface getLinkByHashOutputProps {
  link: string;
}

const data = [
  { id: 0, hash: "a0d8cf4s", url: "https://www.youtube.com" },
  { id: 1, hash: "hhhhhhhh", url: "https://www.google.com" },
  { id: 2, hash: "bbbbbbbb", url: "https://www.instagram.com" },
];

const getLinkByHash = (
  query: getLinkByHashInputProps
): getLinkByHashOutputProps => {
  const linkhash = data.find((row) => row.hash === query.hash);

  if (!linkhash) return { link: "" };
  return {
    link: linkhash.url,
  };
};

export interface postLinkInputProps {
  link: string;
  hash: string;
}

const postLink = (command: postLinkInputProps): void => {
  const id = data.length;

  data.push({
    id,
    hash: command.hash,
    url: command.link,
  });
};

export const hashlinkMock = {
  getLinkByHash,
  postLink,
};
