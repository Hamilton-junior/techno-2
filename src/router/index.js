import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Courses from '../views/Courses.vue';
import Course from '../views/Course.vue';
import TheClass from '../views/TheClass.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/cursos',
    name: 'courses',
    component: Courses,
  },
  {
    path: '/cursos/:curso',
    name: 'curso',
    component: Course,
    props: true,
    children: [
      {
        path: ':aula',
        name: 'aula',
        component: TheClass,
        props: true,
      },
    ],
  },
  {
    path: '/contato',
    name: 'contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
