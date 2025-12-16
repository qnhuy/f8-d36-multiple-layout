import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Loading from '../../components/Loading'
// import styles from './Posts.module.css'
import Pagination from '../../components/Pagination'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1)

    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`
        )
            .then((response) => response.json())
            .then((posts) => setPosts(posts))
            .catch((error) => console.error('Error fetching posts:', error))
            .finally(() => setIsLoading(false))
    }, [page])

    useEffect(() => {
        setSearchParams({ page })
    }, [setSearchParams, page])

    function handleChangePage(newPage) {
        setPage(newPage)
    }

    return (
        <div>
            {isLoading && <Loading />}

            <h1>Posts</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.id}. {post.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <Pagination
                currentPage={page}
                totalPage={5}
                onPageChange={handleChangePage}
            />
        </div>
    )
}
