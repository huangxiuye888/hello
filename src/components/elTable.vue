<template>
  <div class="home">
    <el-table v-bind="$attrs" style="width: 100%">
      <el-table-column
        v-for="(item, index) in cloumns"
        v-bind="item"
        :key="index"
      >
        <template v-if="item.needSlot" #default="{ row, column, $index }">
          <slot :name="item.prop" v-bind="{ row, column, $index }"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    cloumns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>