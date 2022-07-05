// 传入一个组件配置
// 将它实例化，挂载值body
import Vue from 'vue'
export default function create(Component, props) {
    // 实例化
    // 1.extend
    // 2.new Vue({render(){}})
    const vm = new Vue({
        render: h => {
            return h(Component, {
                props
            })
        }
    })
    // 挂载才能获得DOM
    vm.$mount()  /* 不传递宿主，防止将DOM全部替换，手动去追加 */
    document.body.appendChild(vm.$el)
    // 获取组件实例
    const comp=vm.$children[0]
    comp.remove=()=>{
        document.body.removeChild(vm.$el)
        // 释放资源
        vm.$destroy
    }
    return comp
}