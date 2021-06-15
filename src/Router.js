import React, { Suspense, Fragment, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
// import Authenticated from './components/gaurds/Authenticated'
// import Guest from './components/gaurds/Guest'
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
        gaurd: Layout,
        component: lazy(() => import('./components/dashboard'))
    },
    {
        exact: true,
        path: '/post',
        gaurd: Layout,
        component: lazy(() => import('./components/posts/CreatePost'))
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
        // gaurd: Guest,
        component: lazy(() => import('./components/auth/Login'))
    },
    {
        exact: true,
        path: '/signup',
        // gaurd: Guest,
        component: lazy(() => import('./components/auth/SignUp'))
    }
]

export default routes