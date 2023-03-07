import client from "./client";

export const getOtherDocuments = async () => {
  const results = await client.get("/browse");

  return results.data;
};
