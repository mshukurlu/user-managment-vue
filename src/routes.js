import Home from './pages/Home'
import Users from './pages/Users'


export default [
    {
      path:'/',
      component:Home,
      name:'home'
    },
    {
      path:'/users',
      component:Users,
      name:'users'
    }
]