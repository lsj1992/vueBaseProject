import http from '@/utils/httpAxios'

export function getData(params) {
  // setTimeout(() => {
  //   return {
  //     id: 1,
  //     name: '张三',
  //     age: 18,
  //     sex: '男'
  //   }
  // }, 5000);
  return http.ajax('/api/user', 'get', params)
}
