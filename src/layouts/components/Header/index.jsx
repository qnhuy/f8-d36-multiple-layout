import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const navigation = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Posts', link: '/posts' },
    { name: 'Login', link: '/login' },
    { name: 'Admin', link: '/admin' },
]

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.left}>
                <Link to={'/'} className={styles.leftContent}>
                    Ray Dev
                </Link>
            </h1>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {navigation.map((item, index) => (
                        <li key={index} className={styles.navItem}>
                            <Link
                                to={item.link}
                                className='text-hover-primary'
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
