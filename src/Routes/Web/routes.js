import Home from '../../Components/Web/Home/';
import Login from '../../Components/Web/Auth/Login/';
import SingleProduct from '../../Components/Web/SingleProduct';

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
  {
    id: 3,
    path: '/coffee/single-product/:slug',
    name: 'coffee-single-product',
    component: SingleProduct,
    layout: 'web',
  }
];

export default routes;