import client from "./client";

export const getDocuments = async (pageParam, sort, order) => {
  try {
    const { id, cursor } = pageParam;
    const query = `?id=${id}&sort=${sort}&order=${order}&cursor=${cursor}`;

    const results = await client.get(`/document${query}`);

    return results.data;
  } catch (e) {
    throw e;
  }
};

export const searchDocuments = async (pageParam, keyword) => {
  try {
    const { id, cursor } = pageParam;
    const query = `?id=${id}&keyword=${keyword}&cursor=${cursor}`;

    const results = await client.get(`/document/search${query}`);

    return results.data;
  } catch (e) {
    throw e;
  }
};

export const writeDocument = async (payload) => {
  try {
    const results = await client.post("/document", payload);

    return results.data;
  } catch (e) {
    throw e;
  }
};

export const getDocument = async (id) => {
  const results = await client.get(`/document/${id}`);

  return results.data;
};

export const modifyDocument = async ({ id, payload }) => {
  try {
    const results = await client.post(`/document/${id}`, payload);

    return results.data;
  } catch (e) {
    throw e;
  }
};

export const deleteDocument = async (id) => {
  try {
    const results = await client.delete(`/document/${id}`);

    return results.data;
  } catch (e) {
    throw e;
  }
};
