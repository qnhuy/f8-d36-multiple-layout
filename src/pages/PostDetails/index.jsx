import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import styles from './PostDetails.module.css'

export default function PostDetails() {
    const params = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
            fetch(
                `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
            ),
        ])
            .then(([postResponse, commentResponse]) =>
                Promise.all([postResponse.json(), commentResponse.json()])
            )
            .then(([postData, commentData]) => {
                setPost(postData)
                setComments(commentData)
            })
            .catch(() => navigate('/posts'))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className={styles.postDetailsContainer}>
            <h1>PostDetails</h1>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className={styles.post}>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <p className={styles.userId}>User ID: {post.userId}</p>
                        <p className={styles.postBody}>{post.body}</p>
                    </div>

                    <div>
                        <h2>Comments</h2>
                        <ul className={styles.commentList}>
                            {comments.length === 0 ? (
                                <p className={styles.noComment}>
                                    This post has no comment yet
                                </p>
                            ) : (
                                comments.map((comment) => (
                                    <li
                                        key={comment.id}
                                        className={styles.commentItem}
                                    >
                                        <div className={styles.commentHeader}>
                                            <h4 className={styles.commentName}>
                                                {comment.name}
                                            </h4>
                                            <div
                                                className={styles.commentEmail}
                                            >
                                                {comment.email}
                                            </div>
                                        </div>
                                        <p className={styles.commentBody}>
                                            {comment.body}
                                        </p>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}
