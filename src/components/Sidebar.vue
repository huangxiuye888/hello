
<template>
  <div class="menu">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="handleClick"
    >
      <template v-for="item in menuList">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon type="pie-chart" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <SubItem v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>


<script>
import router from "@/router";
import SubItem from "./Menu.vue";
export default {
  components: { SubItem },
  data() {
    return {
      collapsed: false,
      menuList: [],
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.$emit("collapsed", this.collapsed);
    },
    handleClick(e) {
      this.$router.push(e.key);
    },
  },
  mounted() {
    this.menuList = this.$store.state.routers.find(
      (item) => item.path === "/"
    ).children;
  },
};
</script>
<style lang="less" scoped>

</style>
