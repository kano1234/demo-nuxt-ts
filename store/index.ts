import { GetterTree, MutationTree } from 'vuex'
import { UserInfo } from '@/types'

// dummy data
let userInfoes: Array<UserInfo> = []
for (var i = 1; i <= 30; i++) {
  const userInfo: UserInfo = {
    id: i.toString(),
    name: 'test',
    zip: '1310045',
    tel: '09012345678',
    createAt: '2021-01-18T00:00:00'
  }
  userInfoes.push(Object.assign(userInfo))
}

export const state = () => ({
  collapse: false as boolean,
  userInfoes: userInfoes,
  totalCount: 30
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isCollapse: state => state.collapse,
  getUserInfoes: state => state.userInfoes,
  getTotalCount: state => state.totalCount
}

export const mutations: MutationTree<RootState> = {
  setCollapse: (state, collapse: boolean) => (state.collapse = collapse),
}
