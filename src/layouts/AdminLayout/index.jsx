import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import AdminSidebar from './components/AdminSidebar'
import AdminFooter from './components/AdminFooter'
import styles from './AdminLayout.module.css'

export default function AdminLayout() {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <div className={styles.mainContent}>
                <Outlet />
                <AdminSidebar />
            </div>
            <AdminFooter />
        </div>
    )
}
