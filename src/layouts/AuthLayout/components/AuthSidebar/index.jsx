import { NavLink } from 'react-router-dom'
import styles from './AuthSidebar.module.css'

const navbar = [
    { title: 'Login', to: '/login' },
    { title: 'Register', to: '/register' },
    { title: 'Forgot Password', to: '/forgot-password' },
]

export default function AuthSidebar() {
    return (
        <nav className={styles.sidebarContainer}>
            <ul className={styles.list}>
                {navbar.map((item) => (
                    <li key={item.title} className={styles.item}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) => `
                                text-hover-primary
                                ${styles.content}
                                ${isActive ? styles.active : ''}
                            `}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
