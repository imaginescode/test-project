import axios from 'axios'

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList (page) {
  return axios.get(`${config.baseUrl}news/${page}.json`)
}
function fetchJobsList () {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}
function fetchAskList () {
  return axios.get(`${config.baseUrl}ask/1.json`)
}
function fetchUserInfo (userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`)
}
function fetchCommentItem (id) {
  return axios.get(`${config.baseUrl}item/${id}.json`)
}
export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem
}
