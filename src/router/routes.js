import index from '../pages/index/index.vue'
import entry from '../pages/index/Atype/Atype.vue'
import grid from '../pages/index/Meshing/Meshing.vue'
import publics from '../pages/index/Cooperation/Cooperation.vue'
import Information from '../pages/index/Cooperation/Information/Information.vue'
import Manager from '../pages/index/Cooperation/Manager/Manager.vue'
import login from '../pages/login/login.vue'
import register from '../pages/register/register.vue'
import Apply from '../pages/index/Atype/Apply/Apply.vue'
import Administer from '../pages/index/Atype/Administer/Administer.vue'
let routes = [
        {
            path:'/',
            redirect:'admin/menu/public'
        },
        {
            path:'/login',
            name:'login',
            component:login
        },
        {
            path:'/register',
            name:'register',
            component:register
        },
        {
            path:'/admin',
            name:'admin',
            component:index,
            redirect:'admin/menu/public',
            children:[
                {
                    path:'/admin/menu/entry',
                    name:'entry',
                    component:entry,
                    redirect:'menu/entry/apply',
                    children:[
                        {
                            path:'apply',
                            name:'Apply',
                            component:Apply
                        },
                        {
                            path:'administer',
                            name:'Administer',
                            component:Administer
                        }
                    ]
                },
                {
                    path:'/admin/menu/grid',
                    name:'grid',
                    component:grid
                },
                {
                    path:'/admin/menu/public',
                    name:'public',
                    component:publics,
                    redirect:'menu/public/manager',
                    children:[
                        {
                            path:'manager',
                            name:'Manager',
                            component:Manager
                        },
                        {
                             path:'information',
                            name:'Information',
                            component:Information
                        }
                    ]
                }
            ]
        }
    ]
export default routes