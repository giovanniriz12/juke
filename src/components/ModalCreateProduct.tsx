import { IModalCreateProduct } from "@/app/_interfaces/IModalCreateProduct";
import { FC, memo } from "react";

const ModalCreateProduct: FC<IModalCreateProduct> = (props) => {
  return (
    <div className="col-md-12">
      <div
        className="modal fade"
        id="createProductModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 me-4" id="exampleModalLabel">
                Create Item{" "}
                <span className="text-success">
                  {" "}
                  {props.success ? "Succeed" : ""}
                </span>
                <span className="text-info">
                  {props.loading ? "Waiting" : ""}
                </span>
              </h1>
              {/* {props.errors.userId && (
                <span className="text-danger">
                  {" "}
                  {props.errors.userId.message}
                </span>
              )} */}
              {props.errors.title && (
                <span className="text-danger">
                  {" "}
                  {props.errors.title.message}
                </span>
              )}
              {/* {props.errors.body && (
                <span className="text-danger">
                  {" "}
                  {props.errors.body.message}
                </span>
              )} */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={props.handleSubmit(props.onSubmit, props.onError)}
                className="ms-md-1 px-4"
              >
                <input
                  type="string"
                  {...props.register("title")}
                  placeholder="Title"
                  defaultValue={
                    props.success?.title
                      ? `User Id : ${props.success.title}`
                      : undefined
                  }
                  disabled={props.success?.title ? true : false}
                  className={`me-2 ${
                    props.errors.title ? "" : "mb-3"
                  } border-0`}
                />

                <input
                  type="text"
                  {...props.register("price")}
                  defaultValue={
                    props.success?.price
                      ? `price : ${props.success.price}`
                      : undefined
                  }
                  disabled={props.success?.price ? true : false}
                  placeholder="price"
                  className={`me-2 ${
                    props.errors.price ? "" : "mb-3"
                  } border-0`}
                />

                <input
                  type="text"
                  {...props.register("description")}
                  defaultValue={
                    props.success?.description
                      ? `Description : ${props.success.description}`
                      : undefined
                  }
                  disabled={props.success?.description ? true : false}
                  placeholder="description"
                  className={`me-2 mb-3 border-0 ${
                    props.errors.description ? "mt-3" : ""
                  }`}
                />

                <input
                  type="text"
                  {...props.register("categoryId")}
                  defaultValue={
                    props.success?.category
                      ? `Category : ${props.success.category}`
                      : undefined
                  }
                  disabled={props.success?.category ? true : false}
                  placeholder="category"
                  className={`me-2 mb-3 border-0 ${
                    props.errors.categoryId ? "mt-3" : ""
                  }`}
                />

                <input
                  type="text"
                  {...props.register("images")}
                  defaultValue={
                    props.success?.images
                      ? `images : ${props.success.images}`
                      : undefined
                  }
                  disabled={props.success?.images ? true : false}
                  placeholder="images"
                  className={`me-2 mb-3 border-0 ${
                    props.errors.images ? "mt-3" : ""
                  }`}
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={props.onReset}
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value={"Save"}
                    disabled={props.watch().title ? false : true}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalCreateProduct);
