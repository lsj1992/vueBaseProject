<template>
  <div>
    <el-row>
      <el-col :span="16">
        <ul>
          <li
            v-for="todo in todos"
            :key="todo.id"
          >
           {{todo.title}}
            <!-- 我们为每个 todo 准备了一个插槽，-->
            <!-- 将 `todo` 对象作为一个插槽的 prop 传入。-->
            <slot :todo="todo" :names='names'>
              <!-- 回退的内容 -->
              {{ todo.title }}
              <!-- {{msg}} -->
            </slot>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'message',
      names: ['lsj', 'ngiehi', 'ngeihi']
    };
  },
  props: ['todos'],
  computed: {
  },
  methods: {
  },
  mounted() {
  }
};
</script>


<style scoped>

</style>
