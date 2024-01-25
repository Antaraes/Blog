import React from "react";
import { Pagination } from "react-bootstrap";
// import { InlineIcon } from '@iconify/react';

export default function PaginationServerSide({ page, setPage, pageCount }) {
  console.log(pageCount);

  const itemsPerPage = pageCount;

  const handlePageChange = (value) => {
    if (value > 0 && pageCount >= value) {
      setPage(value);
    }
  };

  console.log("itemsPerPage", itemsPerPage);

  return (
    <div
      className=" gap-2 mx-auto my-5 d-flex justify-content-center align-items-center"
      style={{ width: "100%", margin: "auto" }}
    >
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(page - 1)} />

        {itemsPerPage <= 9 &&
          Array.from({ length: itemsPerPage }, (_, index) => (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              active={page === index + 1}
              key={index + 1}
            >
              {index + 1}
            </Pagination.Item>
          ))}

        <Pagination.Last onClick={() => handlePageChange(page + 1)} />
      </Pagination>
    </div>
  );
}
