import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import AuthSidebar from './components/AuthSidebar'

export default function AuthLayout() {
    return (
        <div>
            <h1>Auth Layout</h1>

            <div>
                <Header />
                
                <div>
                    <AuthSidebar />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
