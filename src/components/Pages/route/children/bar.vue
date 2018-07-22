<template>
  <div class="bar">
    <div>bar组件{{$route.params.id}}</div>
    <button><router-link to="/home">离开，回首页</router-link></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to)
    console.log(from)
    next();
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.$route.params.id);
    next();
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
};
</script>


<style scoped>
  .bar {
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    margin-top: 20px;
  }
</style>
