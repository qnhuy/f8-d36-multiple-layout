import { NavLink } from 'react-router-dom'

export default function AdminSidebar() {
    return (
        <div>
            <h1>Admin Footer</h1>

            <div>
                <ul>
                    <li>
                        <NavLink to='/admin'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin/users'>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin/setting'>Setting</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
