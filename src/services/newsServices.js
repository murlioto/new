import axios from 'axios'
import { AppCode } from './config'

// 获取新闻类别
export async function getNewsChannels() {
  let resp = await axios.get("http://ali-news.showapi.com/channelList",{
    headers:{
      Authorization: `APPCODE ${AppCode}`
    }
  })
  return resp.data.showapi_res_body
}

// test
// getNewsChannels()

// 获取新闻列表
export async function getNews(channelId = '5572a108b3cdc86cf39001cd', page = 1, limit = 10) {
  let resp = await axios.get('http://ali-news.showapi.com/newsList',{
    headers: {
      Authorization: `APPCODE ${AppCode}`
    },
    params: {
      channelId,
      page,
      maxResult: limit,
      needAllList: false,
      needContent: 1
    }
  })
  return resp.data.showapi_res_body.pagebean
}
