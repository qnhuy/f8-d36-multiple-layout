import { Link } from 'react-router-dom'

export default function AuthSidebar() {
    return (
        <div>
            <h1>Auth Sidebar</h1>

            <div>
                <Link to='/login' style={{ display: 'block' }}>
                    Login
                </Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    )
}
