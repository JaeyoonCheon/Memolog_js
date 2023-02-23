import client from "./client";

export const getDocuments = async () => {
  const results = await client.get("/document");

  return results.data;
};

export const writeDocuments = async (payload) => {
  const results = await client.post("/document", payload);

  return results.data;
};
