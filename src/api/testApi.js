import http from '@/utils/httpAxios'
import Api from '@/api/server.conf'

export function getData(params) {
  return http.ajax(Api.uGetUser, params)
}
