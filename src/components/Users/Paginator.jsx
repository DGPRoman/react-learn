import { useState } from "react";

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className="pagination">
            <ul>
                <li>
                    {portionNumber > 1 &&
                        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>
                    }
                </li>

                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber).map((p) => {
                    return (
                        <li key={`page${p}`} className={currentPage === p ? 'active' : ''}
                            onClick={(e) => { onPageChanged(p); }}>
                            <span>{p}</span>
                        </li>
                    )
                })}

                <li>{portionCount > portionNumber &&
                    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
                }</li>
            </ul>
        </div>
    )
};

export default Paginator;
