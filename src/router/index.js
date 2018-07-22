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
        // {
        //   path: '/routeChildren',
        //   name: 'routeChildren',
        //   component: resolve => require(['@/components/Pages/route/parentRoute.vue'], resolve),
        //   meta: {
        //     title: '嵌套路由',
        //     isUseCache: false,
        //     keepAlive: false
        //   }
        // },
        {
          path: '/routeParams',
          name: 'routeParams',
          component: resolve => require(['@/components/Pages/route/routeParams.vue'], resolve),
          meta: {
            title: '路由传参',
            isUseCache: false,
            keepAlive: false
          },
          children: [
            {
              path: '/home1',
              name: 'home',
              component: resolve => require(['@/components/Pages/route/children/home.vue'], resolve),
              meta: {
                title: '接收路由参数',
                isUseCache: false,
                keepAlive: false
              }
            }, // No props, no nothing
            {
              path: '/foo',
              name: 'foo',
              component: resolve => require(['@/components/Pages/route/children/foo.vue'], resolve),
              meta: {
                title: '接收路由参数',
                isUseCache: false,
                keepAlive: false
              }
            }
          ]
        },
        {
          path: '/routeMethods',
          name: 'routeMethods',
          component: resolve => require(['@/components/Pages/route/routeMethods.vue'], resolve),
          meta: {
            title: '路由钩子函数',
            isUseCache: false,
            keepAlive: false
          },
          children: [
            {
              path: '/bar/:id',
              name: 'bar',
              component: resolve => require(['@/components/Pages/route/children/bar.vue'], resolve),
              meta: {
                title: '路由钩子',
                isUseCache: false,
                keepAlive: false
              },
              beforeEnter: (to, from, next) => {
                console.log(to)
                console.log(from)
                next()//必须写
              }
            }
          ]
        },
        // 状态管理
        {
          path: '/propsEmit',
          name: 'propsEmit',
          component: resolve => require(['@/components/Pages/vuex/propsEmit.vue'], resolve),
          meta: {
            title: 'props和emit的使用',
            isUseCache: false,
            keepAlive: false
          }
        },
        {
          path: '/refsChild',
          name: 'refsChild',
          component: resolve => require(['@/components/Pages/vuex/refsParent.vue'], resolve),
          meta: {
            title: 'refs、children、parents',
            isUseCache: false,
            keepAlive: false
          }
        },
        {
          path: '/busUsed',
          name: 'busUsed',
          component: resolve => require(['@/components/Pages/vuex/busUsed.vue'], resolve),
          meta: {
            title: '兄弟组件之间方法调用',
            isUseCache: false,
            keepAlive: false
          }
        },
        {
          path: '/vuexUsed',
          name: 'vuexUsed',
          component: resolve => require(['@/components/Pages/vuex/vuexUsed.vue'], resolve),
          meta: {
            title: 'vuex的使用',
            isUseCache: false,
            keepAlive: false
          }
        },
      ]
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
