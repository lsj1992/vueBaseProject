// const localEvent = {
//   StorageGetter: function (key) {
//     return JSON.parse(localStorage.getItem(key))
//   },
//   StorageSetter: function (key, val) {
//     return localStorage.setItem(key, JSON.stringify(val))
//   }
// }
// export default localEvent

const getters = {
  appState: state => state.app.appState,
  language: state => state.app.language,
  testState: state => state.vuexTest.testState
}
export default getters
