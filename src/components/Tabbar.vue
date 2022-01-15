<template>
  <div class="tabbar">
    <a-tabs
      :activeKey="activeKey"
      type="editable-card"
      :hideAdd="true"
      @edit="onEdit"
      @change="handlerChangek"
    >
      <a-tab-pane v-for="pane in panes" :key="pane.path" :tab="pane.meta.title">
        {{ pane.content }}
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: "",
      panes: [],
    };
  },
  methods: {
    handlerChangek(key) {
      console.log(key);
      this.activeKey = key;
      this.$router.push(key);
    },
    callback(key) {
      console.log(key);
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    remove(targetKey) {
      console.log(targetKey);
      let delindex = "";
      this.panes.forEach((item, index) => {
        if (item.path === targetKey) {
          delindex = index;
        }
      });
      this.panes = this.panes.filter((item) => item.path !== targetKey);
      if (this.panes.length) {
        if (targetKey === this.activeKey) {
          if (delindex === this.panes.length) {
            this.activeKey = this.panes[delindex - 1].path;
          } else {
            this.activeKey = this.panes[delindex].path;
          }
        }
      }else{
          this.$router.push('/')
      }
    },
  },
  watch: {
    $route: {
      handler(val) {
        const list = this.panes.map((item) => item.path);
        if (!list.includes(val.path)) {
          this.panes.push(val);
        }
        this.activeKey = val.path;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang="less" scoped>
.tabbar {
}
</style>