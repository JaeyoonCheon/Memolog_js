import client from "./client";

export const getOtherDocuments = async (pageParam) => {
  const { id, cursor } = pageParam;
  const query = `?id=${id}&cursor=${cursor}`;

  const results = await client.get(`/browse${query}`);

  return results.data;
};
