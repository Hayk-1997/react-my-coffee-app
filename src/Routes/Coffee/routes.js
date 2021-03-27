import Home from '../../Components/Coffee/Home/';
import Login from '../../Components/Coffee/Auth/Login/';
import SingleProduct from '../../Components/Coffee/SingleProduct';
import Cart from '../../Components/Coffee/Cart';

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
  },
  {
    id: 4,
    path: '/coffee/cart',
    name: 'cart',
    component: Cart,
    layout: 'web',
  }
];

export default routes;