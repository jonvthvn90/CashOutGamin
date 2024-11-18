import axios from 'axios';

const twitterApiUrl = 'https://api.twitter.com/2';

const getTwitterUser = async (accessToken) => {
  try {
    const response = await axios.get(`${twitterApiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const postToTwitter = async (accessToken, message) => {
  try {
    const response = await axios.post(`${twitterApiUrl}/tweets`, {
      text: message,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getTwitterUser, postToTwitter };