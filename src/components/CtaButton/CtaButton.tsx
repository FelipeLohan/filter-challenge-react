/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components"

const ButtonStyled = styled.button`
  padding: 10px 0;
  color: #fff;
  background-color: #55BC04;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 2.2vmin;
`

type Props = {
  text: string;
  buttonType: any;
  handleClick: Function;
}

const CtaButton = ({text, buttonType, handleClick}: Props) => {
  return(
    <>
    <ButtonStyled type={buttonType} onClick={handleClick}> {text} </ButtonStyled>
    </>
  )
}

export {CtaButton}