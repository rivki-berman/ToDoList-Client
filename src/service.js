import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5242/items"

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  })

export default {

  getTasks: async () => {
    try {
      const result = await axios.get()
      return result.data;
    }
    catch (error) {
      console.log(error);
    }
  },

  addTask: async (name) => {
    try {
      // console.log('addTask', name)
      const result = await axios.post(`?name=${name}`)
      return result.data;
    }
    catch (error) {
      console.log(error);
    }
  },

  setCompleted: async (id, isComplete) => {
    // console.log('setCompleted', { id, isComplete })
    try {
      const result = await axios.patch(`?id=${id}&&isComplete=${isComplete}`)
      return result.data;
    }
    catch (error) {
      console.log(error);
    }
  },

  deleteTask: async (id) => {
    // console.log('deleteTask')
    try {
      const result = await axios.delete(`?id=${id}`)
      return result.data;
    }
    catch (error) {
      console.log(error);
    }
  }
};
