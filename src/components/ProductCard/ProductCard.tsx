import styled from "styled-components";

const ProductCardContainer = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #55bc04;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 10px;
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
        <h3>{productPrice}</h3>
      </ProductCardContainer>
    </>
  );
};

export { ProductCard };
