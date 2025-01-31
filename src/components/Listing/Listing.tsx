import styled from "styled-components"
import { ProductCard } from "../ProductCard"

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
  return(
    <>
      <ListingContainer>
        <ProductCard productName="Computador Pro" productPrice={1200} />
        <ProductCard productName="Computador Pro" productPrice={1200} />
      </ListingContainer>
    </>
  )
}

export { Listing }