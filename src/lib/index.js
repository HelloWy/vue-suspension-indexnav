import Slidernav from './slidernav.vue'

const slidernav = {
  install: function (Vue) {
    Vue.component(Slidernav.name,Slidernav)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(slidernav)
}
export default slidernav
