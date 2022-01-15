import Vue from 'vue'
import Vuex from 'vuex'
import {defaultRoutes} from "@/router"
import {generatorDynamicRouter} from "@/router/generator-routers.js"
import router from "@/router"
import Api from "@/api/index"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routers:defaultRoutes,
    addRouters:[],
    token:""
  },
  mutations: {
    SET_TOKEN:(state,payload)=>{
      state.token=payload
    },
    SET_ROUTERS:(state,routers)=>{
      state.addRouters=routers
      state.routers=[...defaultRoutes,...routers]
    }
  },
  actions: {
    async GenerateRoutes({commit},data){
      const defaultData=data||JSON.parse(localStorage.getItem('routers'))
      // console.log(defaultData)
      try{
        const routes=await generatorDynamicRouter(defaultData)
        console.log(routes)
        router.addRoutes(routes)
        commit('SET_ROUTERS',routes)
      }catch(err){
        // console.log(err)
      }
    },
    Login({commit}){
      return new Promise((resolve,reject)=>{
        Api.login().then(async res=>{
          const {data}=res
          // console.log(data.routerList)
          commit('SET_TOKEN',data.token)
          localStorage.setItem('token',data.token)
          localStorage.setItem('routers',JSON.stringify(data.routerList))
          await this.dispatch('GenerateRoutes',data.routerList)
          resolve(res)
        })
      })
    }
  },
  modules: {
  }
})
