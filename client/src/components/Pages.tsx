import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setPageDevice } from "../store/action-creators/device";
type CountProps = {
  count: number;
  pags: number;
};
const Pages: React.FC<CountProps> = ({ count, pags }) => {
  const pageCount = Math.ceil(count / 4);
  const pages = [];
  const dispatch = useDispatch();
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  const setPage = (page: number) => {
    dispatch(setPageDevice(page));
  };
  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          onClick={() => setPage(page)}
          active={pags === page}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
