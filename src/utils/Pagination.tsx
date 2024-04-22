import React from "react";

interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

export default function Pagination({ itemsPerPage, totalItems, paginate, currentPage }: PaginationProps) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const totalPages = pageNumbers.length;
    const pageRange = 10;
    const currentRange = Math.floor((currentPage - 1) / pageRange);
    const startPage = currentRange * pageRange + 1;
    const endPage = Math.min(startPage + pageRange - 1, totalPages);

    const goToPreviousRange = () => {
        if (startPage > 1) {
            paginate(startPage - pageRange);
        }
    };

    const goToNextRange = () => {
        if (endPage < totalPages) {
            paginate(endPage + 1);
        }
    };

    return (
        <nav>
            <ul className="pagination flex justify-center space-x-3 py-2 text-sm">
                <li>
                    <button
                        onClick={goToPreviousRange}
                        disabled={startPage === 1}
                        className="page-link"
                    >
                        &lt;
                    </button>
                </li>
                {pageNumbers.slice(startPage - 1, endPage).map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : 'text-gray-400'}`}>
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={goToNextRange}
                        disabled={endPage === totalPages}
                        className="page-link"
                    >
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    );
}