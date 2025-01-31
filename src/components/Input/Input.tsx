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

type Props = {
  placeholderText: string;
  type: string;
  name: string;
  value: number;
}

const Input = ({placeholderText, type, name, value}: Props) => {
  return(
  <>
    <InputStyled placeholder={placeholderText} type={type} name={name} value={value} />
  </>
  );
};

export { Input };
