import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 40px 0;
  display: flex;
  align-items: center;
  background-color: #55BC04;
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
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <h1>DSFilter</h1>
          <h3>6 produtos</h3>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export { Header };
