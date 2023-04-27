import client from "./client";

export const getHashtagFrequency = async () => {
  try {
    const results = await client.get("/stat/frequency");

    return results.data;
  } catch (e) {
    return e;
  }
};

export const getHashtagTrends = async () => {
  try {
    const results = await client.get("/stat/trends");

    return results.data;
  } catch (e) {
    return e;
  }
};
