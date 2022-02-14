<template>
  <div class="home">
    <el-table :data="newList" border :show-header="false" style="width: 100%">
      <el-table-column
        v-for="(item, index) in columns"
        :prop="item.dataIndex"
        :label="item.label"
        width="180"
        :key="index"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Eat",
  data() {
    return {
      list: [
        { name: "张三", age: 18, sex: 22 },
        { name: "李四", age: 19, sex: 23 },
        { name: "王五", age: 20, sex: 24 },
        { name: "赵六", age: 21, sex: 25 },
        { name: "狗七", age: 22, sex: 26 },
        { name: "王八", age: 23, sex: 27 },
        { name: "脑瘫", age: 24, sex: 28 },
        { name: "智障", age: 25, sex: 29 },
        { name: "老牙", age: 26, sex: 30 },
        { name: "盖阔", age: 27, sex: 31 },
        { name: "王总", age: 28, sex: 32 },
        { name: "弱智", age: 29, sex: 33 },
        { name: "傻子", age: 30, sex: 34 },
        { name: "逗比", age: 31, sex: 35 },
      ],
      newList: [],
      columns: [
        {
          label: "日期",
          dataIndex: "name",
        },
        {
          label: "姓名",
          dataIndex: "age",
        },
        {
          label: "地址",
          dataIndex: "sex",
        },
      ],
    };
  },
  methods: {
    changeList() {
      this.newList = Object.keys(this.list[0]).map((item) =>
        this.list.reduce((cur, pre, index) => {
          cur[`name${index}`] = pre[item];
          return cur;
        }, {})
      );
      this.columns = this.list.map((item,index)=>{
        const obj={dataIndex:'',label:''}
        obj.dataIndex=`name${index}`
        return obj
      })
    },
  },
  mounted() {
    this.changeList();
  },
};
</script>