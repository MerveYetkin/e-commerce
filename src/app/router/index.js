import { createRouter, createWebHistory } from 'vue-router'


import FrontLayout from '@/app/views/layout/FrontLayout.vue'
import Home from '@/app/views/pages/Home.vue'
import Notfound from '@/app/views/pages/error/Notfound.vue'
import Company from '@/app/views/pages/Company.vue'
import New from '@/app/views/pages/New.vue'
import Top from '@/app/views/pages/Top.vue'





const routes = [
    
      {
        path:'/',
        name:'FrontLayout',
        component:FrontLayout,
         children:[ 
       {
          path:'/',
          name:'Home',
          component:Home
        },
        {
          path:'/kampanyalar',
          name:'Company',
          component:Company
        },
        {
          path:'/yeni-gelenler',
          name:'New',
          component:New
        },
        {
          path:'/üst-giyim',
          name:'Top',
          component:Top
        }
           ]   
       },
    {
        path:'/:catchAll(.*)',
        name:'Notfound',
        component:Notfound
    }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router