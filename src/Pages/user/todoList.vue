<template>
  <div>
    <el-row>
      <el-col :span="16">
        <child-list v-bind:todos="todoList">
          <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
          <template slot-scope="slotProps">
            <!-- 为待办项自定义一个模板，-->
            <!-- 通过 `slotProps` 定制每个待办项。-->
            <div v-if="slotProps.todo.isComplete">
              {{ slotProps.todo.title }}
            </div>
            <div>{{ slotProps.names[0] }}</div>
          </template>
      </child-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import childList from './childList'
export default {
  data() {
    return {
      name: localStorage.getItem("ms_username"),
      todoList: [
        {
          title: '路由的使用',
          status: false,
          routeName: 'RouteUsed',
          isComplete: false
        },
        {
          title: '组建之间的传值、方法互调',
          status: false,
          routeName: 'PropsEmit',
          isComplete: false
        },
        {
          title: 'vuex的使用',
          status: false,
          routeName: 'VuexUsed',
          isComplete: true
        },
        {
          title: '今天要修复100个bug',
          status: false,
          routeName: 'RouteUsed',
          isComplete: false
        },
        {
          title: '今天要修复100个bug',
          status: true,
          routeName: 'RouteUsed',
          isComplete: true
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: true,
          routeName: 'RouteUsed'
        }
      ]
    };
  },
  components: {
    childList
  },
  computed: {
    role() {
      return this.name === "admin" ? "超级管理员" : "普通用户";
    }
  },
  methods: {
    handleJoinPeople(data) {
      console.log(data)
    }
  },
  mounted() {
    console.log(this.scope1)
  }
};
</script>


<style scoped>

</style>
