import styled from "styled-components"

const ButtonStyled = styled.button`
  padding: 10px 0;
  color: #fff;
  background-color: #55BC04;
  border: none;
  border-radius: 8px;
  width: 100%;
`

type Props = {
  text: string;
  type: string;
}

const CtaButton = ({text, type}: Props) => {
  return(
    <>
    <ButtonStyled type={type} >{text}</ButtonStyled>
    </>
  )
}

export {CtaButton}