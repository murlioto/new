import axios from 'axios'
// 登录
export async function Login(loginInfo) {
  // POST http://study.yuanjin.tech/api/user/login
  let resp = await axios.post("/api/user/login", loginInfo)
  const token = resp.headers.authorization; // 服务器令牌
  // 如果有token则保存
  if(token) {
    localStorage.setItem("token", token) 
  }
  return resp.data
} 

// 使用保存的令牌从服务器获取信息
export async function WhoAmI() {
  // GET http://study.yuanjin.tech/api/user/whoami
  const token = localStorage.getItem("token")
  if(!token) {
    return null
  }
  let resp = await axios.get("/api/user/whoami",{
    headers: {
      authorization: `bearer ${token}`
    }
  }) 
  return resp.data.data
}

// 注销用户

export function LoginOut() {
  localStorage.removeItem("token")
}

// 注册

export async function Registered(userinfo) {
  // POST http://study.yuanjin.tech/api/user/reg
  let resp = await axios.post("/api/user/reg",userinfo)
  return resp.data
}