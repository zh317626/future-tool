// lib/http.js

// 通过 axios 处理请求
const axios = require('axios')

axios.interceptors.response.use(res => {
  return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get('https://api.github.com/orgs/zhurong-cli/repos')
}

// async function getRepoList() {
//   return axios.get('https://api.github.com/orgs/zh317626/repos')
// }

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function  getTagList(repo) {
  return axios.get(`https://api.github.com/repos/zhurong-cli/${repo}/tags`)
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
// async function  getTagList(repo) {
//   return axios.get(`https://github.com/zh317626/json-tool/tags`)
// }

module.exports = {
  getRepoList,
  getTagList
}