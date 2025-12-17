import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import styles from './Posts.module.css'
import Pagination from '../../components/Pagination'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1)

    async function fetchPosts(newPage = page) {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${newPage}`
        )
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts)
                setPage(newPage)
            })
            .catch((error) => console.error('Error fetching posts:', error))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetchPosts()
    }, [page])

    useEffect(() => {
        setSearchParams({ page })
    }, [setSearchParams, page])

    function handleChangePage(newPage) {
        setIsLoading(true)
        fetchPosts(newPage)
    }

    return (
        <div className={styles.postsContainer}>
            {isLoading && <Loading />}

            <h1 className={styles.title}>Posts</h1>

            <ul className={styles.postList}>
                {posts.map((post) => (
                    <li key={post.id} className={styles.postItem}>
                        <Link
                            to={`/posts/${post.id}`}
                            className='text-hover-primary'
                        >
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
