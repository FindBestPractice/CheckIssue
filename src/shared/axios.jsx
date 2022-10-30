import axios from 'axios';

const url = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

export async function getIssuesList(payload) {
  return await axios.get(url + '/issues', {
    headers: {
      Authorization: key,
    },
    params: payload,
  });
}
export async function getIssuesDetail(id) {
  return await axios.get(url + `/issues/${id}`, {
    headers: {
      Authorization: key,
    },
  });
}
export async function getComment(id) {
  return await axios.get(url + `/issues/${id}/comments`, {
    headers: {
      Authorization: key,
    },
  });
}
