const baseUrl =
  process.env.apiUrl && process.env.apiUrl !== '@API_URL'
    ? process.env.apiUrl
    : 'http://localhost:3001/v1';
export default baseUrl;
