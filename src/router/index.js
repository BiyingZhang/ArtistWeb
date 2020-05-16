import Vue from 'vue'
import Router from 'vue-router'

import About from '../views/About.vue'
import Paintings from '../views/Paintings.vue'
import Sculpture from '../views/Sculpture.vue'

Vue.use(Router)

const routes = [
      {
        path: '/',
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
          path: '/paintings',
          name:'Paintings',
          component: Paintings
      },
      {
        path: '/sculpture',
        name:'Sculpture',
        component: Sculpture
    }
]

const router = new Router({
    routes
})

export default router


