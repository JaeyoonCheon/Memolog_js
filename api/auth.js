import client from "./client";

export const signIn = async (payload) => {
  try {
    const results = await client.post("/auth/signin", payload);

    return results.data;
  } catch (e) {
    return e;
  }
};

export const signUp = async (payload) => {
  try {
    const results = await client.post("/auth/signup", payload);

    return results.data;
  } catch (e) {
    return e;
  }
};
