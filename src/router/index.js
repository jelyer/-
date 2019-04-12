import Vue from 'vue'
import Router from 'vue-router'
/*import OperationForm from '@/components/OperationForm'*/

Vue.use(Router);

const routes = [
  {
    path:"",
    redirect: 'box1',
    component:() => import('@/views/box1'),
  },
  {
    path: "/box1",
    component:() => import('@/views/box1'),
  },
  {
    path: "/box2",
    component: () => import('@/views/box2'),
  },
  {
    path: "/box3",
    component: () => import('@/views/box3'),
  },
  {
    path: "/box4",
    component: () => import('@/views/box4'),
  }
]
const router =  new Router({
  routes
})
export default router;





/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})*/
