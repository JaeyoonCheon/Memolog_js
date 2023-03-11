import client from "./client";

export const getDocuments = async (sort, order) => {
  const query = `?sort=${sort}&order=${order}`;
  console.log(query);

  const results = await client.get(`/document${query}`);

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

export const modifyDocument = async ({ id, payload }) => {
  const results = await client.post(`/document/${id}`, payload);

  return results.data;
};

export const deleteDocument = async (id) => {
  const results = await client.delete(`/document/${id}`);

  return results.data;
};
