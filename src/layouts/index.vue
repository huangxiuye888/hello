<template>
  <div class="box">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-header style="background: #fff; padding: 0">
        <Header />
      </a-layout-header>
      <a-layout class="content">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
          <Sidebar @collapsed="getCollapsed"/>
        </a-layout-sider>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <Tabbar />
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Tabbar from "@/components/Tabbar.vue";
export default {
  components: {
    Header,
    Sidebar,
    Tabbar,
  },
  data(){
      return {
          collapsed:false
      }
  },
  methods:{
      getCollapsed(val){
          this.collapsed=val
      }
  }
};
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
 .box, .ant-layout{
    height: 100%;
}
</style>