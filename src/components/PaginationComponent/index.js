import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
// src
import './style.scss'
import { paginateUsersRequested } from '../../redux/slice';

function PaginationComponent() {
    const [pageCount, setPageCount] = useState(0);

    const searchValue = useSelector(state => state.searchValue)
    const total_users = useSelector(state => state.total_users)

    useEffect(() => {
        let maxCount = Math.ceil(total_users / 10)
        if (maxCount > 100) maxCount = 100
    
        setPageCount(maxCount)
    }, [total_users]);

    const dispatch = useDispatch()
  
    const handlePageClick = (event) => {
        let page = event.selected + 1
        
        dispatch(paginateUsersRequested({
            searchValue,
            page
        }));
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
        />
    )
}

export default PaginationComponent
