import Users from './pages/Users';
import User from './pages/User';
import Home from './pages/Home';
import Movies from './pages/Movies';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies',
        component: Movies
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/users/:id',
        component: User
    },
];