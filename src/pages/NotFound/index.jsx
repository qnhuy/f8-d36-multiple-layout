import { Link, useNavigate } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Page Not Found</h1>
            <Link onClick={() => navigate(-1)} className={styles.navigate}>
                <h2>Go back</h2>
            </Link>
        </div>
    )
}
