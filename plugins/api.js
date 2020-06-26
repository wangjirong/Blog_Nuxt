import Vue from 'vue'

export const get = async (url, params) => {
  return await Vue.$axios.get(url, {
    params
  })
}

export const post = async (url, data) => {
  return await Vue.$axios.post(url, data)
}
