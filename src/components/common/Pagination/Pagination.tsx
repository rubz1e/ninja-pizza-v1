import ReactPaginate from 'react-paginate';
import './Pagination.scss';

export default function Pagination({ totalPages, currentPage, onChangePage }: any) {
  console.log(totalPages);
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        className="pagination"
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
