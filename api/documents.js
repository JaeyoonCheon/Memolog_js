import client from "./client";

export const getDocuments = async (pageParam, sort, order) => {
  const { id, cursor } = pageParam;
  const query = `?id=${id}&sort=${sort}&order=${order}&cursor=${cursor}`;

  const results = await client.get(`/document${query}`);

  return results.data;
};

export const searchDocuments = async (keyword) => {
  const query = `?keyword=${keyword}`;

  const results = await client.get(`/document/search${query}`);

  return results.data;
};

export const writeDocument = async (payload) => {
  console.log("write post start");
  const results = await client.post("/document", payload);
  console.log("write post end");

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
