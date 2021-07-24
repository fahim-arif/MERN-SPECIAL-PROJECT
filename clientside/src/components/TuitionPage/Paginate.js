import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { listTutors } from "../../actions/tutorActions";

const Paginate = ({ pages, page, tutorType }) => {
  const dispatch = useDispatch();

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            onClick={() => {
              dispatch(listTutors("", x + 1, tutorType));
            }}
            active={x + 1 === page}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
