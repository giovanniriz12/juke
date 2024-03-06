import { useAppSelector } from "@/app/_redux/store";
import { FC, Fragment, memo } from "react";
import { IPaginationComponent } from "@/app/interfaces/requests/IPagination";

const Pagination: FC<IPaginationComponent> = (props) => {
  const page = useAppSelector((state) => state);
  const testNUmber = 1;
  return (
    <Fragment>
      <div className="col-md-12 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${testNUmber === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                onClick={() => props.onClickPrevOrNextPage("&laquo;")}
              >
                &laquo;
              </a>
            </li>
            <li className={`page-item ${testNUmber === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                onClick={() => props.onClickPrevOrNextPage("&lsaquo;")}
              >
                &lsaquo;
              </a>
            </li>

            {props.paginationData.map((value) => (
              <li
                className={`page-item ${value === testNUmber ? "active" : ""}`}
                onClick={() => props.onClickPrevOrNextPage(value)}
                key={value}
              >
                <a className="page-link" href="#">
                  {value}
                </a>
              </li>
            ))}

            <li
              className={`page-item ${
                testNUmber === props.totalPage ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => props.onClickPrevOrNextPage("&rsaquo;")}
              >
                &rsaquo;
              </a>
            </li>
            <li
              className={`page-item ${
                testNUmber === props.totalPage ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => props.onClickPrevOrNextPage("&raquo;")}
              >
                &raquo;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default memo(Pagination);
