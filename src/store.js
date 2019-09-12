import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

let api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/'
})

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    jobs: [],
    activeJob: {},
    houses: [],
    // activeHouse: {}
  },
  mutations: {
    setCars(state, payload) {
      state.cars = payload
    },
    setActiveCar(state, payload) {
      state.activeCar = payload
    },

    setJobs(state, data) {
      state.jobs = data
    },

    setActiveJob(state, data) {
      state.activeJob = data
    },
    setHouses(state, data) {
      state.houses = data
    }

  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await api.get('cars')
        commit('setCars', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCarById({ commit, dispatch }, payload) {
      try {
        let res = await api.get(`/cars/${payload.carId}`)
        commit('setActiveCar', res.data.data)

      } catch (error) {
        console.error(error)

      }
    },
    async getJobs({ commit, dispatch }) {
      try {
        let res = await api.get('jobs')
        console.log("got to getJobs")
        commit('setJobs', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getJobById({ commit, dispatch }, data) {
      try {
        let res = await api.get(`/jobs/${data.jobId}`)
        commit('setActiveJob', res.data.data)

      } catch (error) {
        console.error(error)
      }
    },

    async getHouses({ commit, dispatch }) {
      try {
        let res = await api.get('houses')
        commit('setHouses', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addCar({ dispatch }, payload) {
      try {
        let res = await api.post('/cars', payload)
        dispatch('getCars')
      } catch (error) {
        console.error(error)

      }
    },

    async addJob({ dispatch }, data) {
      try {
        let res = await api.post('/jobs', data)
        dispatch('getJobs')
      } catch (error) {
        console.error(error)
      }
    },
    async delortCar({ dispatch }, payload) {
      try {
        let res = await api.delete('/cars/' + payload)
        dispatch('getCars')
        //NOTE this is coming from the import statement at the top
        router.push({ name: 'cars' })
      } catch (error) {
        console.error(error)
      }
    }

  }
})
