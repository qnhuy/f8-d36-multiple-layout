import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Footer from './components/Footer'
import styles from './DefaultLayout.module.css'

export default function DefaultLayout() {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <div className={styles.layoutContent}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
