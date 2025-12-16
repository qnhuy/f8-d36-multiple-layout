import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <h1>Footer</h1>
            <ul>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/privacy'>Privacy</Link></li>
            </ul>
        </div>
    )
}
