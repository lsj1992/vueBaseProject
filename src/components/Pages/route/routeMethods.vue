<template>
  <div>
    <ul>
        <li><router-link to="/bar/1">路由钩子1</router-link></li>
        <li><router-link to="/bar/2">路由钩子2</router-link></li>
    </ul>
    <router-view class="bar"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
};
</script>


<style scoped>

</style>
