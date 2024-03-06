import { ZodType, z } from "zod";
import { ICreateProduct } from "../_interfaces/requests/ICreateProduct";

export const postProductSchema: ZodType<ICreateProduct> = z.object({
  title: z.string(),
  price: z.number(),
  description: z.string(),
  categoryId: z.number(),
  images: z.string().array(),
});
