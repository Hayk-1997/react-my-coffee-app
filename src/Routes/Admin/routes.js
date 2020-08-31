import Login from '../../Components/Admin/Auth/Login/Login';
import Dashboard from '../../Components/Admin/Dashboard/Dashboard';
import Register from '../../Components/Admin/Auth/Register/Register';
import Home from '../../Components/Admin/Home';
import AwesomeSlider from '../../Components/Admin/Home/Containers/AwesomeSlider';
import Info from '../../Components/Admin/Home/Containers/Info';
import OurHistory from '../../Components/Admin/Home/Containers/OurHistory';
import Services from '../../Components/Admin/Home/Containers/Services';
import OurMenu from '../../Components/Admin/Home/CardMedia/OurMenu';

const routes = [
  {
    id: 1,
    path: '/admin/login',
    name: 'admin-login',
    component: Login,
    isPublic: true,
    layout: 'admin',
  },
  {
    id: 2,
    path: '/admin/register',
    name: 'admin-register',
    component: Register,
    isPublic: true,
    layout: 'admin',
  },
  {
    id: 3,
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    icon: 'fa fa-columns',
    layout: 'admin',
    auth: true,
    child : [
      {
        id: 1,
        parent: 'Dashboard',
        name: 'Metrica',
        path: '/admin/dashboard/metrica',
        icon : 'fa fa-globe-americas'
      },
    ],
  },
  {
    id: 4,
    path: '/admin/home',
    name: 'Home',
    component: Home,
    icon: 'fa fa-home',
    layout: 'admin',
    auth: true,
    child: [
      {
        id: 1,
        parent: 'Home',
        name: 'AwesomeSlider',
        icon: 'fa fa-slideshare',
        component: AwesomeSlider,
      },
      {
        id: 2,
        parent: 'Home',
        name: 'Info',
        icon: 'fa fa-slideshare',
        component: Info,
      },
      {
        id: 3,
        parent: 'Home',
        name: 'OurHistory',
        icon: 'fa fa-slideshare',
        component: OurHistory,
      },
      {
        id: 3,
        parent: 'Home',
        name: 'Services',
        icon: 'fa fa-slideshare',
        component: Services,
      },
      {
        id: 3,
        parent: 'Home',
        name: 'OurMenu',
        icon: 'fa fa-slideshare',
        component: OurMenu,
      },
    ]
  },
  // {
  //     id: 5,
  //     path: '/admin/to-do',
  //     name: 'admin-to-do',
  //     component: Hello,
  //     layout: 'admin',
  //     auth: true,
  // }
];

export default routes;