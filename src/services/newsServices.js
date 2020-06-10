import axios from 'axios'
import { AppCode } from './config'

// 获取新闻类别
export async function getNewsChannels() {
  let resp = await axios.get("http://ali-news.showapi.com/channelList",{
    headers:{
      Authorization: `APPCODE ${AppCode}`
    }
  })
  return resp.data.showapi_res_body.channelList
}

// test
// getNewsChannels()

// 获取新闻列表
/**
 * [getNews description]
 * @param  {[type]} channeId   [频道id]
 * @param  {Number} [page=1]   [当前页数,默认值为1]
 * @param  {Number} [limit=10] [每页最大显示数，默认值为10]
 * @return {[type]}            [Array]
 */
export async function getNews(channeId, page = 1, limit = 10) {
  let resp = await axios.get('http://ali-news.showapi.com/newsList',{
    headers: {
      Authorization: `APPCODE ${AppCode}`
    },
    params: {
      channeId,
      page,
      maxResult: limit,
      needAllList: false,
      needContent: 1
    }
  })
  return resp.data.showapi_res_body.pagebean.contentlist
}
