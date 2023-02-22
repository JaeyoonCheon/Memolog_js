import client from "./client";

export const signIn = async (payload) => {
  console.log(payload);
  const results = await client.post("/signin", payload);

  return results.data;
};

export const signUp = async (payload) => {
  console.log(payload);
  const results = await client.post("/signup", payload);

  return results.data;
};
