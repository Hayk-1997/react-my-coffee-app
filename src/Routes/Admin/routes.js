import Login from '../../Components/Admin/Auth/Login/Login';
import Dashboard from '../../Components/Admin/Dashboard/Dashboard';
import Register from '../../Components/Admin/Auth/Register/Register';
import Home from '../../Components/Admin/Home';
import AwesomeSlider from '../../Components/Admin/Home/Containers/AwesomeSlider';
import Info from '../../Components/Admin/Home/Containers/Info';
import OurStory from '../../Components/Admin/Home/Containers/OurStory';
import Services from '../../Components/Admin/Home/Containers/Services';
import OurMenu from '../../Components/Admin/Home/Containers/OurMenu';
import StaticCounter from '../../Components/Admin/Home/Containers/StaticCounter';
import Categories from '../../Components/Admin/Categories';
import Products from '../../Components/Admin/Products';

const routes = [
  {
    path: '/admin/login',
    name: 'admin-login',
    component: Login,
    isPublic: true,
    layout: 'admin',
  },
  {
    path: '/admin/register',
    name: 'admin-register',
    component: Register,
    isPublic: true,
    layout: 'admin',
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    icon: 'fa fa-columns',
    layout: 'admin',
    auth: true,
    child : [
      {
        parent: 'Dashboard',
        name: 'Metrica',
        path: '/admin/dashboard/metrica',
        icon : 'fa fa-globe-americas'
      },
    ],
  },
  {
    path: '/admin/home',
    name: 'Home',
    component: Home,
    icon: 'fa fa-home',
    layout: 'admin',
    auth: true,
    child: [
      {
        path: '/admin/home/awesome-slider',
        parent: 'Home',
        name: 'Awesome Slider',
        icon: 'fa fa-slideshare',
        component: AwesomeSlider,
      },
      {
        path: '/admin/home/info',
        parent: 'Home',
        name: 'Info',
        icon: 'fa fa-slideshare',
        component: Info,
      },
      {
        path: '/admin/home/our-story',
        parent: 'Home',
        name: 'Our Story',
        icon: 'fa fa-slideshare',
        component: OurStory,
      },
      {
        path: '/admin/home/services',
        parent: 'Home',
        name: 'Services',
        icon: 'fa fa-slideshare',
        component: Services,
      },
      {
        path: '/admin/home/our-menu',
        parent: 'Home',
        name: 'Our Menu',
        icon: 'fa fa-slideshare',
        component: OurMenu,
      },
      {
        path: '/admin/home/static-counter',
        parent: 'Home',
        name: 'Static Counter',
        icon: 'fa fa-slideshare',
        component: StaticCounter,
      },
    ]
  },
  {
    path: '/admin/categories',
    name: 'Categories',
    component: Categories,
    icon: 'fa fa-list-alt',
    layout: 'admin',
    auth: true,
  },
  {
    path: '/admin/products',
    name: 'Products',
    component: Products,
    icon: 'fa fa-product-hunt',
    layout: 'admin',
    auth: true,
  }
];

export default routes;