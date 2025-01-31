import styled from "styled-components";

const InputStyled = styled.input`
  border: 1px solid #C2C2C2;
  padding: 5px;
  background-color: #fff;
  font-size: 2.2vmin;

  &::placeholder {
    color: #C2C2C2;
  }
`

const Input = () => {
  return(
  <>
    <InputStyled />
  </>
  );
};

export { Input };
