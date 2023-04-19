import axios from "axios"
function get(path) {
  return axios.get(path)
}
export { get }
