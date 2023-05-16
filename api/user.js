import client from "./client";

export const getUserProfile = async (payload) => {
  const { userId } = payload;

  try {
    const results = await client.get(`/user/${userId}`);

    return results.data;
  } catch (e) {
    return e;
  }
};

export const makeUserProfile = async (payload) => {
  const { userId, nickname, profileImageUrl } = payload;

  try {
    const results = await client.post(`/user/${userId}`, {
      nickname,
      profile_image_url: profileImageUrl,
    });

    return results.data;
  } catch (e) {
    return e;
  }
};
