import styled from "styled-components";

const InputStyled = styled.input`
  border: 1px solid #C2C2C2;
  border-radius: 12px;
  padding: 10px;
  background-color: #fff;
  font-size: 2.2vmin;
  width: 100%;

  &::placeholder {
    color: #C2C2C2;
  }
`

type Props = {
  placeholderText: string;
  inputType: string;
  name: string;
  value: number;
  handleChange: Function;
}

const Input = ({placeholderText, inputType, name, value, handleChange}: Props) => {
  return(
  <>
    <InputStyled placeholder={placeholderText} type={inputType} name={name} value={value} onChange={handleChange} />
  </>
  );
};

export { Input };
