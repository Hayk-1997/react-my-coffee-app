import Login from "../../Components/Admin/Auth/Login/Login";
import Dashboard from "../../Components/Admin/Dashboard/Dashboard";
import Register from "../../Components/Admin/Auth/Register/Register";
import {Hello} from "../../Components/Admin/Hello";
import Home from "../../Components/Admin/Home/Home";
import { FaBeer } from 'react-icons/fa';
import React from "react";
import AwesomeSlider from "../../Components/Admin/Home/Containers/AwesomeSlider/AwesomeSlider";
import Intro from "../../Components/Admin/Home/Containers/Intro/Intro";
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
        name: 'dashboard',
        component: Dashboard,
        icon: "fa fa-columns",
        layout: 'admin',
        auth: true,
        child : [
            {
                id: 1,
                parent: 'dashboard',
                name: 'Metrica',
                path: '/admin/dashboard/metrica',
                icon : 'fa fa-globe-americas'
            },
        ],
    },
    {
        id: 4,
        path: '/admin/home',
        name: 'home',
        component: Home,
        icon: "fa fa-home",
        layout: 'admin',
        auth: true,
        child: [
            {
                id: 1,
                parent: 'home',
                name: 'AwesomeSlider',
                icon: 'fa fa-slideshare',
                component: AwesomeSlider,
            },
            {
                id: 2,
                parent: 'home',
                name: 'Intro',
                icon: 'fa fa-slideshare',
                component: Intro,
            }
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