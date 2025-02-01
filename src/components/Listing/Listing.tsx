import styled from "styled-components"
import { ProductCard } from "../ProductCard"
import * as productService from "../../services/product-service.ts"
import { useContext, useEffect, useState } from "react"
import { ProductDTO } from "../../models/product.ts"
import { ContextProductList } from "../../utils/context-productList.ts"

const ListingContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Listing = () => {

  const [productList, setProductList] = useState<ProductDTO[]>(productService.showAllProducts())

  const {contextProductList} = useContext(ContextProductList)

  useEffect(() => {
    setProductList(contextProductList)
  }, [contextProductList])

  return(
    <>
      <ListingContainer>
        {
          productList.map((e) => <ProductCard key={e.id} productName={e.name} productPrice={e.price} />)
        }
      </ListingContainer>
    </>
  )
}

export { Listing }