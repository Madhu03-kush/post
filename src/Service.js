import { get } from "./Api"
function getPost() {
  return get("https://dummyjson.com/posts")
}
export { getPost }
