const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem('token', token);
  },
  getAuthToken() {
    return window.localStorage.getItem('token');
  },
  clearAuthToken() {
    window.localStorage.removeItem('token');
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  getPayload() {
    return JSON.parse(atob(this.getAuthToken().split('.')[1]));
  }
}

export default TokenService;
