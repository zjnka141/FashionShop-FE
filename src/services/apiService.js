// @flow

import axios from 'axios'

const API_ROOT = 'http://localhost:8080/'

class ApiService {
  constructor() {
    const client = axios.create({
      baseURL: API_ROOT,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    this.client = client
  }

  get(path, config) {
    return this.client.get(path, config).then(response => response.data)
  }

  post(path, data, config) {
    return this.client.post(path, data, config).then(response => response.data)
  }

  put(path, data, config) {
    return this.client.put(path, data, config).then(response => response.data)
  }

  patch(path, data, config) {
    return this.client.patch(path, data, config).then(response => response.data)
  }

  delete(path, config) {
    return this.client.delete(path, config).then(response => response.data)
  }
}

export default new ApiService()
