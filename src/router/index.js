import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FourOhFour from '../views/FourOhFour.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/league-standings/:day',
    name: 'league',
    // route level code-splitting
    // this generates a separate chunk (LeagueTable.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "LeagueTable" */ '../views/LeagueTable.vue'),
    props: true,
  },
  {
    path: '/player-bio/:player/:played/:won/:lost/:draw/:ps/:doOut/:late/:mom/:votes/:total/:ave',
    name: 'player-bio',
    // route level code-splitting
    // this generates a separate chunk (PlayerBio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PlayerBio" */ '../views/PlayerBio.vue'),
    props: true,
  },
  {
    path: '/mom-votes/',
    name: 'mom-votes',
    // route level code-splitting
    // this generates a separate chunk (MomVotes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "MomVotes" */ '../views/MomVotes.vue'),
  },
  {
    path: '/badminton-rules/:day',
    name: 'badminton-rules',
    // route level code-splitting
    // this generates a separate chunk (BadmintonRules.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "MomVotes" */ '../views/BadmintonRules.vue'),
  },
  {
    path: '/*',
    component: FourOhFour,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
