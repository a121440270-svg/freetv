import { getRouterParam } from 'h3'
import { getVideoDetail } from '../../providers/provider-manager'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || ''

  const detail = await getVideoDetail(id)

  return {
    detail,
  }
})