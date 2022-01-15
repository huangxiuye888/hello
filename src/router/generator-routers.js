export const constantRouterComponents={
    BasicLayout:()=>import('@/layouts/index'),
    RouteView:()=>import('@/layouts/RouteView'),
    Happya:()=>import('@/views/happy/happya.vue'),
    Happyb:()=>import('@/views/happy/happyb.vue'),
    Lista:()=>import('@/views/list/lista.vue'),
    Listb:()=>import('@/views/list/listb.vue'),
    Drnka:()=>import('@/views/system/drnk/drnka.vue'),
    Drnkb:()=>import('@/views/system/drnk/drnkb.vue'),
    Eat:()=>import('@/views/system/eat.vue'),
}
export const generator=(routerMap=[])=>{
    return routerMap.map(item=>{
        const currentRouter={
            path:item.path,
            name:item.name,
            component:constantRouterComponents[item.component],
            meta:{
                title:item.title||undefined,
                icon:item.icon||undefined,
                keepAlive:item.keep_alive==='true'
            }
        }
        if(item.redirect){
            currentRouter.redirect=item.redirect
        }
        if(item.children&&item.children.length>0){
            currentRouter.children=generator(item.children)
        }
        return currentRouter
    })
}
export const generatorDynamicRouter=result=>{
    return new Promise((resolve,reject)=>{
        const routers=generator(result)
        resolve(routers)
    })
}