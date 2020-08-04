import axios from 'axios'

class API {
  getTrees() {
    return new Promise((resolve, reject) => {
      try {
        const res = axios.get('http://localhost:5000/treeData')
        resolve(res)

      } catch (error) {
        reject(error)
      }
    })
  }

}
export default new API()