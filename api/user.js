import client from "./client";

export const getUserProfile = async (payload) => {
  try {
    const { userId } = payload;

    const results = await client.get(`/user/profile/${userId}`);

    return results.data;
  } catch (e) {
    throw e;
  }
};

export const makeUserProfile = async (payload) => {
  try {
    const { nickname, profileImageUrl } = payload;

    const results = await client.post(`/user/profile`, {
      nickname,
      profile_image_url: profileImageUrl,
    });

    return results.data;
  } catch (e) {
    throw e;
  }
};

export const changeUserProfileImage = async (payload) => {
  try {
    const { profile_image_url } = payload;

    const results = await client.post(`/user/profile/profileImage`, {
      profile_image_url,
    });

    return results.data;
  } catch (e) {
    throw e;
  }
};

export const changeUserNickname = async (payload) => {
  try {
    const { nickname } = payload;

    const results = await client.post(`/user/profile/nickname`, {
      nickname,
    });

    return results.data;
  } catch (e) {
    throw e;
  }
};
