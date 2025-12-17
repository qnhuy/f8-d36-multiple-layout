import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <p className={styles.rights}>
                &copy; 2025 Ray Dev. All rights reserved
            </p>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to='/contact' className='text-hover-primary'>
                        Contact
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to='/privacy' className='text-hover-primary'>
                        Privacy
                    </Link>
                </li>
            </ul>
        </div>
    )
}
