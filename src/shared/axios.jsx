import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const OWNER = process.env.REACT_APP_OWNER;
const REPO = process.env.REACT_APP_REPO;

export const getIssueList = async () => {
  return await axios
    .get(`${URL}/${OWNER}/${REPO}/issues`, {
      headers: {
        Authorization: `Basic ${TOKEN}`,
      },
      params: { per_page: 20, sort: 'comments' },
    })
    .then((res) => {
      return res.data;
    });
};

export const getIssueDetail = async (issueNumber) => {
  return await axios
    .get(`${URL}/${OWNER}/${REPO}/issues/${issueNumber}`, {
      headers: {
        Authorization: `Basic ${TOKEN}`,
      },
    })
    .then((res) => {
      return res.data;
    });
};
