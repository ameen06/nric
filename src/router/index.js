import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Academics from '../views/Academics.vue'
import About from '../views/About.vue'
import Admission from '../views/Admission.vue'
import Contact from '../views/Contact.vue'
import Trust from '../views/trust.vue'
import Blog from '../views/blog.vue'
import blog_post from '../views/blog_post.vue'
import PathNotFound from '../views/PathNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | Nahjurrashad Islamic College',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About | Nahjurrashad Islamic College',
    }
  },
  {
    path: '/academics',
    name: 'Academics',
    component: Academics,
    meta: {
      title: 'Academics | Nahjurrashad Islamic College',
    }
  },
  {
    path: '/admission',
    name: 'Admission',
    component: Admission,
    meta: {
      title: 'Admission | Nahjurrashad Islamic College',
    }
  },
  {
    path: '/trust',
    name: 'Trust',
    component: Trust,
    meta: {
      title: 'Trust | Nahjurrashad Islamic College',
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact us | Nahjurrashad Islamic College',
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'News and Events | Nahjurrashad Islamic College',
    }
  },
  {
    path: '/blog_post/:slug',
    name: 'blog_post',
    component: blog_post,
    meta: {
      title: 'Blog post | Nahjurrashad Islamic College',
    }
  },
  { 
    path: '/:pathMatch(.*)*',
    component: PathNotFound,
    meta: {
      title: '404 - Page not found | Nahjurrashad Islamic College',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
