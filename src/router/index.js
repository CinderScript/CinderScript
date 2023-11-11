import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StateWeaver from '../views/StateWeaver.vue'
import Assets3D from '../views/3DAssets.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/state-weaver',
    name: 'StateWeaver',
    component: StateWeaver
  },
  {
    path: '/3d-assets',
    name: '3DAssets',
    component: Assets3D
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
]

const router = new VueRouter({
  mode: 'hash', // or 'hash' if you prefer
  routes,
  scrollBehavior(to, from, savedPosition) {
    // check if the route has a hash (#)
    if (to.hash) {
      return {
        // scroll to the element with the ID that matches the hash
        selector: to.hash,
        // optional: smooth scrolling
        behavior: 'smooth',
        // optional: offset from the element
        offset: { x: 0, y: 10 }
      };
    } else if (savedPosition) {
      // if savedPosition is available, scroll to it
      return savedPosition;
    } else {
      // otherwise, scroll to the top of the page
      return { x: 0, y: 0 };
    }
  }
})

export default router
