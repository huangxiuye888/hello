<template>
  <div class="home">
    <Table :data="tableData" :cloumns="cloumns">
      <template v-slot:address="{ row, column, $index }">
        <div>{{ row.address }}11</div>
      </template>
      <template v-slot:options>
        <div>查看</div>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from "@/components/elTable.vue";
export default {
  name: "Drnka",
  components: { Table },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      cloumns: [
        {
          prop: "date",
          label: "日期",
          width: "180",
        },
        {
          prop: "name",
          label: "名字",
          width: "280",
        },
        {
          prop: "address",
          label: "地址",
          width: "280",
          needSlot: true,
        },
        {
          prop: "options",
          label: "操作",
          width: "100",
          needSlot: true,
        },
      ],
    };
  },
  methods: {},
};
</script>