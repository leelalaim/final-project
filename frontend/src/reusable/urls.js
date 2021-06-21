const BASE_URL = 'http://localhost:8080';

export const getApiUrl = (slug) => `${process.env.REACT_APP_BASE_URL}/${slug}`;