import client from "./client";

export const getDocuments = async () => {
  const results = await client.get("/");
  console.log("Axios get");

  return results.data;
};
