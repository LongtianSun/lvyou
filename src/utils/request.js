
import axios from "axios";
import store from "@/store/index";
import router from "@/router";

// 创建axios实例
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 10000
  })
  
  // axios请求拦截器
  http.interceptors.request.use(config => {
    if(store.token) {
      config.headers.Authorization = `Bearer ${store.token}`
    }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  http.interceptors.response.use(res => res.data, e => {
    if(e.response.status === 401) {
      store.commit('setUserInfo', {})
      router.push('/login')
    }
    ElMessage.error(e.response.data.message)
    return Promise.reject(e)
  })
  
  
  export default http