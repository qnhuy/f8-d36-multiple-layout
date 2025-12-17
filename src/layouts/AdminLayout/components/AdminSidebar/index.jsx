import { NavLink, useLocation } from 'react-router-dom'
import styles from './AdminSidebar.module.css'

const navigates = [
    {
        path: '/admin',
        title: 'Dashboard',
    },
    {
        path: '/admin/users',
        title: 'Users',
    },
    {
        path: '/admin/setting',
        title: 'Setting',
    },
]

export default function AdminSidebar() {
    const location = useLocation()

    return (
        <nav className={styles.sidebarContainer}>
            <ul className={styles.list}>
                {navigates.map((navigate) => (
                    <li key={navigate.path} className={styles.item}>
                        <NavLink
                            to={navigate.path}
                            className={`
                                text-hover-primary
                                ${styles.content} 
                                ${location.pathname === navigate.path ? styles.active : ''}
                            `}
                        >
                            {navigate.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
