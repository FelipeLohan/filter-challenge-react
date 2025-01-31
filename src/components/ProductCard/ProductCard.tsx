import styled from "styled-components";

const ProductCardContainer = styled.div`
  width: 100%;
  padding: 20px;
  border: 3px solid #55bc04;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2{
    color: #6F6F6F;
    font-size: 2.5vmin;
  }

  h3{
    color: #55BC04;
    font-size: 2.8vmin;
  }
`;

type Props = {
  productName: string;
  productPrice: number;
}

const ProductCard = ({productName, productPrice}: Props) => {
  return (
    <>
      <ProductCardContainer>
        <h2>{productName}</h2>
        <h3>R$ {productPrice}</h3>
      </ProductCardContainer>
    </>
  );
};

export { ProductCard };
