import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem } from '../../api/index.js'

const state = () => ({
  news: [],
  jobs: [],
  ask: [],
  user: {},
  item: {}
})

// getters
const getters = {
  fetchedAsk (state) {
    return state.ask
  },
  fetchedItem (state) {
    return state.item
  },
  fetchedNews (state) {
    return state.news
  }
}
// actions
const actions = {
  FETCH_NEWS ({ commit }, page) {
    fetchNewsList(page)
      .then(({ data }) => {
      // console.log(response)
        // context.commit('SET_NEWS', response.data)
        commit('SET_NEWS', data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_JOBS (context) {
    fetchJobsList()
      .then(({ data }) => {
      // console.log(response)
        context.commit('SET_JOBS', data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_ASK (context) {
    fetchAskList()
      .then(response => {
      // console.log(response)
        context.commit('SET_ASK', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_USER ({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
      // console.log(response)
        commit('SET_USER', data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_ITEM ({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const mutations = {
  SET_NEWS (state, news) {
    state.news = news
  },
  SET_JOBS (state, jobs) {
    state.jobs = jobs
  },
  SET_ASK (state, ask) {
    state.ask = ask
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_ITEM (state, item) {
    state.item = item
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
