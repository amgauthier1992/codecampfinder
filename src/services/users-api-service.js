import config from '../config';
import TokenService from './token-service';

const UsersApiService = {
  async getProfile(user_name) {
    const res = await fetch(`${config.API_ENDPOINT}/users/${user_name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },
};

export default UsersApiService;