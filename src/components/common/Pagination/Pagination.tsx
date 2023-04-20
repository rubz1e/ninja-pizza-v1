import ReactPaginate from 'react-paginate';
import './Pagination.scss';
import { useState } from 'react';

export default function Pagination({ onChangePage }: any) {
  return (
    <>
      <ReactPaginate
        breakLabel='...'
        className='pagination'
        nextLabel='>'
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel='<'
        renderOnZeroPageCount={null}
      />
    </>
  );
}
