import router from "@/router"
import store from "@/store"
router.beforeEach((to, from, next) => {
    let useId = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    if (useId) {
        if (store.state.addRouters.length === 0) {
            store.dispatch('GenerateRoutes', JSON.parse(localStorage.getItem('routers'))).then(() => {
                next({
                    path: to.path
                })
            })
        } else {
            next()
        }
    } else {
        next()
    }

})