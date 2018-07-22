<template>
  <div class="refs_child">
    <h3>这是子组件</h3>
    子组件 名字：{{name}}
    <div>
      <el-button @click="getParentData">获取父元素的data中的值</el-button>
      <span>父元素中的数据：{{parentData}}</span>
      <el-button @click="getParentMethods">调用父元素的方法</el-button>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      name: '张某某',
      msg: '这是子组件中的msg展示到父组件中',
      parentData: ''
    };
  },
  created() {

  },
  methods: {
    changeName(name) {
      this.$set(this, 'name', name)
    },
    getParentData() {
      console.log(this.$parent)
      this.$set(this, 'parentData', this.$parent.parentMsg)
    },
    getParentMethods() {
      this.$parent.setParentMsg()
    }
  },
  computed: {
  },
  mounted() {

  }
};
</script>


<style scoped>
.refs_child {
  border: 1px solid #000;
  padding: 30px;
}
</style>
