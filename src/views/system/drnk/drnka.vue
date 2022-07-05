<template>
  <div class="home">
    我是drnka
    <div @click="handlerMessage">我是父亲，对儿子说:{{ sthGiveChild }}</div>
    <Child v-model="sthGiveChild"></Child>
  </div>
</template>

<script>
import Child from "./components/child.vue";
export default {
  name: "Drnka",
  components: { Child },
  data() {
    return {
      sthGiveChild: "给你100块",
    };
  },
  methods: {
    handlerMessage(){
      this.$notice({title:'哈哈',message:'我也不知道对不对',duration:2000})
    }
  },
};
</script>