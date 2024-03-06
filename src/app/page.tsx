"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./_redux/store";
import {
  getProducts,
  postProducts,
  setPage,
} from "./_redux/products/productsSlice";
import { paginationRange } from "./_utils/paginationRange";
import Pagination from "@/components/Pagination";
import { IPagination } from "./_interfaces/requests/IPagination";
import ModalCreateProduct from "@/components/ModalCreateProduct";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICreateProduct } from "./_interfaces/requests/ICreateProduct";
import { postProductSchema } from "./_schemas/postProductSchema";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.product);
  const [limit, setLimit] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState();

  const totalPage = Math.ceil(100 / limit);
  const paginationData = paginationRange(totalPage, Number(4), limit, 1);
  const page = useAppSelector((state) => state.products.page);

  const pagination: IPagination = {
    offset: Number(page),
    limit: limit,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
    getValues,
    setValue,
    watch,
  } = useForm<ICreateProduct>({
    resolver: zodResolver(postProductSchema),
  });

  const getLimitPerPage = (page: number | string) => {
    // dispatch(getLimitTodosPerPage(page))
    //   .unwrap()
    //   .then((res) => {
    //     dispatch(setGetTodos(res.data));
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  };

  const onClickPrevOrNextPage = (type: string | number) => {
    if (type === "&laquo;" || type === "... ") {
      dispatch(setPage(1));
      // getLimitPerPage(1);
    } else if (type === "&lsaquo;") {
      if (page !== 1) {
        dispatch(setPage(Number(page) - 1));
        // getLimitPerPage(Number(page) - 1);
      }
    } else if (type === "&rsaquo;") {
      if (page !== totalPage) {
        dispatch(setPage(Number(page) + 1));
        // getLimitPerPage(Number(page) + 1);
      }
    } else if (type === "&raquo;" || type === " ...") {
      dispatch(setPage(totalPage));
      // getLimitPerPage(totalPage);
    } else {
      dispatch(setPage(type));
      // getLimitPerPage(type);
    }
  };


  const onSubmit = (data: ICreateProduct) => {
    setLoading(true);
    // dispatch(postProducts())
    //   .unwrap()
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
    reset();
  };

  const onError = (errors: FieldErrors<ICreateProduct>) => {
    console.log("Form Errors", errors);
  };

  const onReset = () => {
    setSuccess(undefined);
    reset();
  };

  useEffect(() => {
    dispatch(getProducts(pagination))
      .unwrap()
      .then((res) => {
        dispatch(setPage(1));
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#createProductModal"
          >
            Add Products
          </button>
        </div>
        {products.map((product) => {
          return (
            <div key={product.id} className="col-md-3 text-center p-5">
              <div className="col-md-12 border product-box">
                {product.title}
              </div>
            </div>
          );
        })}
        <Pagination
          onClickPrevOrNextPage={onClickPrevOrNextPage}
          paginationData={paginationData}
          totalPage={totalPage}
        />
        <ModalCreateProduct
          loading={loading}
          success={success}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          onError={onError}
          register={register}
          onReset={onReset}
          watch={watch}
        />
      </div>
    </div>
  );
}
