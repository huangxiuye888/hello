<template>
  <div>
    <div>学习计划</div>
    <div style="width: 600px;margin-left:20px;margin-top:20px">
      <a-table
        :columns="columns"
        :data-source="data"
        bordered
        :pagination="false"
      >
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </div>
  </div>
</template>
<script>
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {},
  };
  if (index === 4) {
    obj.attrs.colSpan = 0;
  }
  return obj;
};
const columns = [
  {
    title: "开始时间",
    dataIndex: "from",
    key: "from",
    width: 180,
  },
  {
    title: "结束时间",
    dataIndex: "to",
    key: "to",
    width: 180,
  },
  {
    title: "任务",
    dataIndex: "work",
    key: "work",
    width: 280,
  },
];

const data = [
  {
    key: "1",
    from: "2022-3-1",
    to: "2022-3-30",
    work: "JavaScript手写api实现",
  },
  {
    key: "2",
    from: "2022-3-31",
    to: "2022-4-10",
    work: "JavaScript设计模式",
  },
  {
    key: "2",
    from: "2022-4-11",
    to: "2022-4-30",
    work: "Vue2.X源码学习",
  },
  {
    key: "2",
    from: "2022-5-1",
    to: "2022-5-10",
    work: "Vue3.X源码学习",
  },
  {
    key: "2",
    from: "2022-5-11",
    to: "2022-5-15",
    work: "Vue3.X+TypeScript",
  },
  {
    key: "2",
    from: "2022-5-16",
    to: "2022-5-31",
    work: "Webpack+Vite复习",
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
