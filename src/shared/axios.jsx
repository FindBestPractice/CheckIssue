import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});

export const getIssues = async (page) => {
  return await instance.get(`/`, { params: { per_page: 15, sort: 'comments', page } });
};
