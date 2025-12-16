import styles from './Pagination.module.css'

export default function Pagination({ currentPage, totalPage, onPageChange }) {
    const movePageClassName = `${styles.pagination} ${styles.changePageIcon}`
    const canMovePrevClassName = currentPage <= 1 ? styles.disabled : ''
    const canMoveNextClassName = currentPage >= totalPage ? styles.disabled : ''

    return (
        <ul className={styles.paginationWrapper}>
            <li
                className={`${movePageClassName} ${canMovePrevClassName}`}
                onClick={() => onPageChange(1)}
            >
                {'|<<'}
            </li>
            <li
                className={`${movePageClassName} ${canMovePrevClassName}`}
                onClick={() => {
                    if (currentPage > 1) {
                        onPageChange(currentPage - 1)
                    }
                }}
            >
                {'<'}
            </li>

            {Array(totalPage)
                .fill()
                .map((_, index) => {
                    const pageNumber = index + 1

                    return (
                        <li
                            key={pageNumber}
                            className={`
                                    ${`${styles.pagination}`} 
                                    ${
                                        pageNumber === currentPage
                                            ? styles.active
                                            : ''
                                    }
                                `}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    )
                })}

            <li
                className={`${movePageClassName} ${canMoveNextClassName}`}
                onClick={() => {
                    if (currentPage < totalPage) {
                        onPageChange(currentPage + 1)
                    }
                }}
            >
                {'>'}
            </li>
            <li
                className={`${movePageClassName} ${canMoveNextClassName}`}
                onClick={() => onPageChange(totalPage)}
            >
                {'>>|'}
            </li>
        </ul>
    )
}
