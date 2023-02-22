import client from "./client";

export const signIn = async (payload) => {
  const results = await client.post("/signin", payload);

  return results.data;
};

export const signUp = async (payload) => {
  const results = await client.post("/signup", payload);

  return results.data;
};
