<template>
  <div>
    <ul>
      <li v-for='(key, user) in userList' :key='key' :class='{"man": $options.filters.isMan(item)}'>{{user.name | isMan}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        {
          id: 001,
          name: '张三',
          sex: '男'
        },
        {
          id: 002,
          name: '李四',
          sex: '男'
        },
        {
          id: 003,
          name: '王五',
          sex: '女'
        }
      ]
    };
  },
  filters: {
    isMan(item) {
      return item.sex === '男' ? true : false
    }
  },
  computed: {

  },
  created() {

  },
  mounted() {

  }
};
</script>


<style scoped>
.man {
  background: #e5e5e5;
}
</style>
