<template>
  <a-table v-bind="$props" v-on="$listeners"> </a-table>
</template>

<script>
import { Table } from "ant-design-vue";
export default {
  name: "Happyb",
  props: {
    ...Table.props,
    // ...myProps,
    // columns: {
    //   typeof: Array,
    //   default: () => [],
    // },
    // data: {
    //   typeof: Array,
    //   default: () => [],
    // },
  },
};
</script>