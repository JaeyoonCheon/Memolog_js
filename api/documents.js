import client from "./client";

export const getDocuments = async () => {
  const results = await client.get("/document");

  return results.data;
};
