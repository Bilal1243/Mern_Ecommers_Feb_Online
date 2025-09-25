import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";

function Paginate({ pages, page, keyword }) {
  return (
    <>
      {pages > 1 && (
        <Pagination>
          {[...Array(pages).keys()].map((x) => (
            <Pagination.Item
              as={Link}
              to={
                keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`
              }
              active={x + 1 == page}
              key={x}
            >
              {x + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </>
  );
}

export default Paginate;