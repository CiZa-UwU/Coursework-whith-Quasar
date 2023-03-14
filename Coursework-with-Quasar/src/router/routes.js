
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Greetings.vue') },
      { path: '/games', component: () => import('pages/Game 1.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/authorization', component: () => import('pages/Authorization.vue')},
      { path: '/authorization/enter', component:  () => import('pages/Enter.vue')},
      { path: '/authorization/register', component:  () => import('pages/Register.vue')}
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
