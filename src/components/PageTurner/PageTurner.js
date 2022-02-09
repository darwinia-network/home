import React, { useCallback, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";

import prevIcon from "./img/prev.svg";
import nextIcon from "./img/next.svg";

const cx = classNames.bind(style);

const PageTurner = ({ totalPage = 1, defaultPage = 1, onPageChange }) => {
  const pageMin = 1;
  const pageMax = totalPage;
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const handlePrevClick = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev > pageMin) {
        onPageChange && onPageChange(prev - 1, "prev");
        return prev - 1;
      }
      return prev;
    });
  }, [onPageChange]);

  const handleNextClick = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev < pageMax) {
        onPageChange && onPageChange(prev + 1, "next");
        return prev + 1;
      }
      return prev;
    });
  }, [onPageChange, pageMax]);

  return (
    <div className={cx("main")}>
      <button onClick={handlePrevClick} disabled={currentPage === pageMin}>
        <img alt="prev" src={prevIcon} />
      </button>
      <button onClick={handleNextClick} disabled={currentPage === pageMax}>
        <img alt="next" src={nextIcon} />
      </button>
    </div>
  );
};

export default React.memo(PageTurner);
