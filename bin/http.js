const axios = require('axios')
const access_token = require('../access_token')
axios.interceptors.response.use(res => {
    return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
    return axios.get('https://gitee.com/api/v5/enterprises/LuxTeam/repos',{
        params:{
            access_token,

        }
    })
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function  getTagList(repo) {
    return axios.get(`https://gitee.com/api/v5/repos/enterprises/${repo}/tags`,{
        params:{
            access_token,
        }
    })
}

module.exports = {
    getRepoList,
    getTagList
}
