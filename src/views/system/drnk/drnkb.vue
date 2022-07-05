<template>
  <div class="box">
    <a-form-model ref="dynamicValidateForm" :model="form">
      <a-table :columns="columns" :data-source="form.data" bordered rowKey='id'>
        <template
          v-for="col in columns"
          slot-scope="text, record, index"
          :slot="col.title"
        >
          <div :key="col.id">
            <a-form-model-item
              :prop="'data.' + index +'.' +col.dataIndex"
              :rules="{
                required: true,
                message: 'domain can not be null',
                trigger: 'blur',
              }"
            >
              <a-input
                v-model="form.data[index][col.dataIndex]"
                placeholder="please input domain"
                style="width: 60%; margin-right: 8px"
                @change="aaa"
              />
            </a-form-model-item>
          </div>
        </template>
      </a-table>
    </a-form-model>
  </div>
</template>
<script>
const columns = [
  {
    title: "name",
    dataIndex: "name",
    width: "25%",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "age",
    dataIndex: "age",
    width: "15%",
    scopedSlots: { customRender: "age" },
  },
  {
    title: "address",
    dataIndex: "address",
    width: "40%",
    scopedSlots: { customRender: "address" },
  },
  {
    title: "operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" },
  },
];
export default {
  data() {
    return {
      form: {
        data: [
          { name: "张三", age: 18, address: "不知道", id: 1 },
          { name: "张三", age: 18, address: "不知道", id: 2 },
          { name: "张三", age: 18, address: "不知道", id: 3 },
          { name: "张三", age: 18, address: "不知道", id: 4 },
          { name: "张三", age: 18, address: "不知道", id: 5 },
        ],
      },
      columns,
    };
  },
  methods: {
    aaa(){
      console.log(this.form)
    }
  },
};
</script>
<style lang="less" scoped>
</style>