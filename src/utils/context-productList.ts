import { createContext } from "react";
import { ProductDTO } from "../models/product";

export type ContextProductListType = {
  productList?: ProductDTO[],
  setProductList?: (productList: ProductDTO[]) => void
}

export const ContextProductList = createContext<ContextProductListType>({})