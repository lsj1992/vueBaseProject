import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/',
      component: resolve => require(['@/components/common/homePage.vue'], resolve),
      meta: {
        title: '首页',
        isUseCache: false, // 结合activated钩子函数中的判断来确定是否去刷新数据
      },
      children: [
        {
          path: '/home',
          name: '/Home',
          component: resolve => require(['@/components/Pages/user/user.vue'], resolve),
          meta: {
            title: '用户信息',
            isUseCache: false, // 结合activated钩子函数中的判断来确定是否去刷新数据
            keepAlive: false
          }
        },
        {
          path: '/Login',
          name: 'Login',
          component: resolve => require(['@/components/Pages/Login.vue'], resolve),
          meta: {
            title: '首页',
            isUseCache: false, // 结合activated钩子函数中的判断来确定是否去刷新数据
            keepAlive: false
          }
        },
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'Nihao 世界',
        isUseCache: false, // 结合activated钩子函数中的判断来确定是否去刷新数据
        keepAlive: false
      }
    },
    {
      path: '/404',
      component: resolve => require(['@/components/Pages/404'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
