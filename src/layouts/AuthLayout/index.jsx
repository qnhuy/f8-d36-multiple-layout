import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import AuthSidebar from './components/AuthSidebar'
import styles from './AuthLayout.module.css'

export default function AuthLayout() {
    return (
        <div className={styles.layoutContainer}>
            <Header />

            <div className={styles.layoutContent}>
                <AuthSidebar />
                <Outlet />
            </div>
        </div>
    )
}
