import client from "./client";

export const getHashtagTrends = async () => {
  try {
    const results = await client.get("/stat/trends");

    return results.data;
  } catch (e) {
    return e;
  }
};
