import { useState } from "react";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Listing } from "./components/Listing";
import { ProductDTO } from "./models/product";
import * as productService from "./services/product-service.ts";
import { ContextProductList } from "./utils/context-productList.ts";

function App() {
  const [contextProductList, setContextProductList] = useState<ProductDTO[]>(
    productService.showAllProducts()
  );

  return (
    <>
      <ContextProductList.Provider
        value={{ contextProductList, setContextProductList }}
      >
        <Header />
        <Filter />
        <Listing />
      </ContextProductList.Provider>
    </>
  );
}

export default App;
