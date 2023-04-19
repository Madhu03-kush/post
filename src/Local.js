function getLocalStorage(object) {
  const app = localStorage.getItem("data")
  if (app) {
    return JSON.parse(app)
  } else {
    return ""
  }
}
export { getLocalStorage }
