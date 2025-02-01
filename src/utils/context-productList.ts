import { createContext } from "react";
import { ProductDTO } from "../models/product";

export type ContextProductListType = {
  contextProductList: ProductDTO[],
  setContextProductList: (productList: ProductDTO[]) => unknown
}

export const ContextProductList = createContext<ContextProductListType>({
  contextProductList: [{ id: 0, name: "", price: 0}],
  setContextProductList: () => {}
})