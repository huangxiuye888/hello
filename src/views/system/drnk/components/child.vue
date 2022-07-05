<template>
  <div class="home">
    <p>我是儿子，父亲对我说： {{ give }}</p>
    <a href="javascript:;" @click="returnBackFn">回应</a>
  </div>
</template>

<script>
export default {
  name: "Drnka",
  props: {
    give: String,
  },
  model: {
    prop: "give",
    event: "returnBack",
  },
  methods: {
    returnBackFn() {
      this.$emit("returnBack", "还你200块");
    },
  },
};
</script>