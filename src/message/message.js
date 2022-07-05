import Notice from "@/components/Notice.vue";
import create from "@/utils/create.js"
let Vue
const install = function (_Vue) {
    Vue = _Vue
    Vue.mixin({
        beforeCreate() {
            Vue.prototype.$notice = function (options) {
                const {title,message,duration}=options
                const notice = create(Notice, {
                    title,
                    message,
                    duration
                })
                notice.show()
            }
        },
    })
}
export default install