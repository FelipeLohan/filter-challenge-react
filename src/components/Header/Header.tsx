import { useContext } from "react";
import styled from "styled-components";
import { ContextProductList } from "../../utils/context-productList";

const HeaderContainer = styled.header`
  padding: 40px 0;
  display: flex;
  align-items: center;
  background-color: #55bc04;
  margin-bottom: 40px;
`;

const HeaderContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;



const Header = () => {

  const { contextProductList } = useContext(ContextProductList);

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <h1>DSFilter</h1>
          <h3>{contextProductList.length} produtos</h3>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export { Header };
