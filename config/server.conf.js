const conf = require('./index')
let nodeEnv = process.env.NODE_ENV
let baseHref = ''
if (nodeEnv === 'development') {
  baseHref = ''
} else if (nodeEnv === 'production') {
  baseHref = 'http://localhost:8080'
} else if (nodeEnv === 'testing') {
  baseHref = 'http://localhost:8080'
}

/**
 *  api 路径
 *
 */

export default {
  /**
   *  教务管理系统接口
   *
   */
  //   课程分类 start 5 个接口 注意核对
  //查询课程分类
  c_get_type: {
    url: baseHref + '/course/type',
    method: 'GET'
  },
  //添加课程分类
  c_post_type: {
    url: '/course/type',
    method: 'POST'
  },
  //删除课程分类
  c_del_type: {
    url: baseHref + '/course/type',
    method: 'DELETE'
  },
  // 更新课程分类名称
  c_put_typeName: {
    url: baseHref + '/course/typeName',
    method: 'PUT'
  },
  // 更新课程分类的状态
  c_put_typeStatus: {
    url: baseHref + '/course/typeStatus',
    method: 'PUT'
  },

  //   课程分类 end

//   课程列表 start  6 个接口 注意核对
  // 查询1级课程分类联动关系
  c_get_levelRelation: {
    url: baseHref + '/course/levelRelation',
    method: 'POST'
  },
  // 根据n级ID(或课程名)筛选课程列表
  c_get_list: {
    url: baseHref + '/course/list',
    method: 'GET'
  },
  // 获取所有老师名称
  c_get_teacher: {
    url: baseHref + '/course/teacher',
    method: 'GET'
  },
  // 更新课程
  c_put_content: {
    url: baseHref + '/course/content',
    method: 'PUT'
  },
  // 创建课程
  c_post_content: {
    url: baseHref + '/course/content',
    method: 'POST'
  },
  // 根据课程ID查询课程详情内容(课程预览)
  c_get_content: {
    url: baseHref + '/course/content',
    method: 'GET'
  },
  //   课程列表 end
  //   班期列表 start
  //查询班期
  c_get_timeTable: {
    url: baseHref + '/course/timeTable',
    method: 'GET'
  },
  //创建班期
  c_post_timeTable: {
    url: baseHref + '/course/timeTable',
    method: 'POST'
  },
  //更新班期的标题
  c_put_timeTableTitle: {
    url: baseHref + '/course/timeTableTitle',
    method: 'PUT'
  },
  // 排课
  c_put_timeTeaching: {
    url: baseHref + '/course/timeTeaching',
    method: 'PUT'
  },
  //删除班期
  c_del_timeTableTitle: {
    url: baseHref + '/course/timeTable',
    method: 'DELETE'
  },
  //获取课程名称列表
  c_post_name: {
    url: baseHref + '/course/name',
    method: 'POST'
  }
}
