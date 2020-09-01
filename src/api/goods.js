import api from './index'
// axios
import request from '@/utils/request'

export function getGoods(data) {
  return request({
    url: api.getCategoryGoods,
    method: 'get',
    data
  })
}
