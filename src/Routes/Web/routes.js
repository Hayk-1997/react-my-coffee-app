import Home from '../../Components/Web/Home/Home';
import Login from '../../Components/Web/Auth/Login/Login';

const routes = [
  {
    id: 1,
    path: '/coffee/login',
    name: 'coffee-login',
    component: Login,
    layout: 'web',
  },
  {
    id: 2,
    path: '/coffee/home',
    name: 'coffee-home',
    component: Home,
    layout: 'web',
  },
];

export default routes;