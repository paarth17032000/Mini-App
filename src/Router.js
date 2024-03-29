import React, { Suspense, Fragment, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Authenticated from './components/gaurds/Authenticated'
import GuestLogin from './components/gaurds/GuestLogin'
import GuestSignUp from './components/gaurds/GuestSignUp'
// console.log(routes)

export const renderRoutes = (routes) => {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <Switch>
                { routes.map( (route, i) => {
                    const Gaurd = route.gaurd || Fragment;
                    const Component = route.component; 
                    return(
                        <Route
                        key={i}
                        exact={route.exact}
                        path={route.path}
                        render={ (props) => (
                                <Gaurd>
                                    <Component {...props} />
                                </Gaurd>
                        )}
                        />
                    )
                })}
            </Switch>
        </Suspense>
    )
}
const routes = [
    {
        exact: true,
        path: '/',
        component: lazy(() => import('./components/layout/Landing'))
    },
    {
        exact: true,
        path: '/dashboard',
        gaurd: Authenticated,
        component: lazy(() => import('./components/dashboard'))
    },
    {
        exact: true,
        path: '/post',
        gaurd: Authenticated,
        component: lazy(() => import('./components/posts/CreatePost'))
    },
    {
        exact: true,
        path: '/users',
        gaurd: Authenticated,
        component: lazy(() => import('./components/dashboard/Users'))
    },
    {
        exact: true,
        path: '/myposts',
        gaurd: Authenticated,
        component: lazy(() => import('./components/posts/OwnPosts'))
    },
    // {
    //     exact: true,
    //     path: '/poll/:poll_id',
    //     // gaurd: Authenticated,
    //     component: lazy(() => import('./components/post/SinglePost'))
    // },
    {
        exact: true,
        path: '/login',
        gaurd: GuestLogin,
        component: lazy(() => import('./components/auth/Login'))
    },
    {
        exact: true,
        path: '/signup',
        gaurd: GuestSignUp,
        component: lazy(() => import('./components/auth/SignUp'))
    }
]

export default routes