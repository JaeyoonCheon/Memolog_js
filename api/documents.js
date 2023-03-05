import client from "./client";

export const getDocuments = async () => {
  const results = await client.get("/document");

  return results.data;
};

export const writeDocument = async (payload) => {
  const results = await client.post("/document", payload);

  return results.data;
};

export const getDocument = async (id) => {
  const results = await client.get(`/document/${id}`);

  return results.data;
};
