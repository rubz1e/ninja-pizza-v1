import ReactPaginate from 'react-paginate';
import './Pagination.scss';

export default function Pagination({ currentPage, onChangePage }: any) {
  return (
    <>
      <ReactPaginate
        breakLabel='...'
        className='pagination'
        nextLabel='>'
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel='<'
        renderOnZeroPageCount={null}
      />
    </>
  );
}
