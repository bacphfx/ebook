import React from "react";
import "./pagination.css";
import {
  ArrowBackIos,
  ArrowForwardIos,
  SkipPreviousOutlined,
} from "@mui/icons-material";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            hidden={currentPage === 1}
            className="page-link"
          >
            <ArrowBackIos fontSize="small" />
          </button>
        </li>
        <li className="page-item">
          <div className="current">{currentPage}</div>
        </li>
        <li className="page-item">
          <button
            onClick={() => onPageChange(currentPage + 1)}
            hidden={currentPage === totalPages}
            className="page-link"
          >
            <ArrowForwardIos fontSize="small" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
