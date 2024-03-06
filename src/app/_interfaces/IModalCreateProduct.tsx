import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { IProductResponseCreated } from "./responses/IProductResponse";
import { ICreateProduct } from "./requests/ICreateProduct";

export interface IModalCreateProduct {
  loading: boolean;
  success: IProductResponseCreated | undefined;
  errors: FieldErrors<ICreateProduct>;
  handleSubmit: UseFormHandleSubmit<ICreateProduct, ICreateProduct>;
  onSubmit: (data: ICreateProduct) => void;
  onError: (errors: FieldErrors<ICreateProduct>) => void;
  register: UseFormRegister<ICreateProduct>;
  onReset: () => void;
  watch: UseFormWatch<ICreateProduct>;
}
