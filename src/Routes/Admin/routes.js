import Login from "../../Components/Admin/Auth/Login/Login";
import Dashboard from "../../Components/Admin/Dashboard/Dashboard";
import Register from "../../Components/Admin/Auth/Register/Register";

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
        name: 'admin-dashboard',
        component: Dashboard,
        layout: 'admin',
    }
];
export default routes;