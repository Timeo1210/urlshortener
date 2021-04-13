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

export const getLinkByHash = async (
  query: getLinkByHashInputProps
): Promise<getLinkByHashOutputProps> => {
  const linkhash = data.find((row) => row.hash === query.hash);

  if (!linkhash) return { link: "" };
  return {
    link: linkhash.url,
  };
};
