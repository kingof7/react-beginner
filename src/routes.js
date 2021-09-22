import Users from './pages/Users';
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
];