let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    const visiblePages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let fromPage = Math.max(currentPage - 3, 1);
    let toPage = Math.min(currentPage + 2, pagesCount);

    if (fromPage > 1) {
        visiblePages.push(1);
    }

    visiblePages.push(...pages.slice(fromPage - 1, toPage));

    if (toPage < pagesCount) {
        visiblePages.push(pagesCount);
    }

    return (
        <div className="pagination">
            <ul>
                {visiblePages.map(p => {
                    return (
                        <li key={`page${p}`} className={currentPage === p ? 'active' : ''}
                            onClick={(e) => { onPageChanged(p); }}>
                            <span>{p}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Paginator;
