
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomePage.vue'),
    children: [
      { path: 'TestPage',
        component: () => import('pages/TestPage.vue') }
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
