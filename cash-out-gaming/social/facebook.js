import axios from 'axios';

const facebookApiUrl = 'https://graph.facebook.com/v13.0';

const getFacebookUser = async (accessToken) => {
  try {
    const response = await axios.get(`${facebookApiUrl}/me`, {
      params: {
        access_token: accessToken,
        fields: 'id,name,email,picture',
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const postToFacebook = async (accessToken, message) => {
  try {
    const response = await axios.post(`${facebookApiUrl}/me/feed`, {
      message,
      access_token: accessToken,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getFacebookUser, postToFacebook };