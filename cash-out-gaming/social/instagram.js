import axios from 'axios';

const instagramApiUrl = 'https://graph.instagram.com/v13.0';

const getInstagramUser = async (accessToken) => {
  try {
    const response = await axios.get(`${instagramApiUrl}/me`, {
      params: {
        access_token: accessToken,
        fields: 'id,username,profile_picture',
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const postToInstagram = async (accessToken, image, caption) => {
  try {
    const response = await axios.post(`${instagramApiUrl}/me/media`, {
      image,
      caption,
      access_token: accessToken,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getInstagramUser, postToInstagram };