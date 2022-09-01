import base from "./base";

const api = {
  getProfilePictureUrl: async (username: string) => {
    const profilePicUrl = await base.get<string>(
      `profilePictureUrl?username=${username}`
    );

    return profilePicUrl;
  },
};

export default api;
