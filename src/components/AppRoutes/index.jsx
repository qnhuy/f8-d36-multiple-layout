import { Routes, Route, HashRouter } from 'react-router-dom'

import DefaultLayout from '../../layouts/DefaultLayout'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Posts from '../../pages/Posts'
import PostDetails from '../../pages/PostDetails'
import Privacy from '../../pages/Privacy'

import AuthLayout from '../../layouts/AuthLayout'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

import AdminLayout from '../../layouts/AdminLayout'
import Dashboard from '../../pages/Dashboard'
import Users from '../../pages/Users'
import Setting from '../../pages/Setting'

import NotFound from '../../pages/NotFound'
import ScrollToTop from '../ScrollToTop'
import Contact from '../../pages/Contact'

export default function AppRoutes() {
    return (
        <HashRouter>
            <ScrollToTop />
            
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='posts' element={<Posts />} />
                    <Route path='posts/:id' element={<PostDetails />} />
                    <Route path='privacy' element={<Privacy />} />
                    <Route path='contact' element={<Contact />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>

                <Route path='admin' element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='users' element={<Users />} />
                    <Route path='setting' element={<Setting />} />
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}
