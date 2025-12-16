import { Outlet } from 'react-router-dom'
import AdminSidebar from './components/AdminSidebar'
import AdminFooter from './components/AdminFooter'

export default function AdminLayout() {
    return (
        <div>
            <h1>Admin Layout</h1>

            <div>
                <AdminSidebar />
                <Outlet />
                <AdminFooter />
            </div>
        </div>
    )
}
