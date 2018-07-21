<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
        text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
              </template>
              <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-setting',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-date',
          index: '3',
          title: '教学内容配置',
          subs: [
            {
              index: 'course',
              title: '课程列表'
            },
            {
              index: 'create',
              title: '创建课程'
            },
            {
              index: 'editor_course',
              title: '编辑课程'
            },
            {
              index: 'preview_course',
              title: '预览课程'
            },
            {
              index: 'manage_course',
              title: '管理课程分类'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          index: '4',
          title: '开班排课',
          subs: [
            {
              index: 'schedule',
              title: '班期列表'
            },
            {
              index: 'preview',
              title: '预览'
            },
            {
              index: 'course_scheduling',
              title: '排课'
            }
          ]
        },
        {
          icon: 'el-icon-date',
          index: '5',
          title: '课程产品运营',
          subs: [
            {
              index: 'product_list',
              title: '产品列表'
            },
            {
              index: 'product_detail',
              title: '产品详情'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    this.$root.bus.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom:0;
  }
  .sidebar-el-menu:not(.el-menu--collapse){
    width: 200px;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
