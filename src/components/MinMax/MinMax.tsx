import styled from "styled-components";

const MinMaxContainer = styled.div`
  width: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3{
    color: #6F6F6F;
    font-size: 2.5vmin;
}

  span{
    color: #55BC04;
    font-size: 2.8vmin;
  }
`;

type Props = {
  minValue: number;
  maxValue: number;
}

const MinMax = ({minValue, maxValue}: Props) => {
  return(
    <>
      <MinMaxContainer>
      <h3><span>Valor minimo:</span> R$ {minValue}</h3>
      <h3><span>Valor máximo</span> R$ {maxValue}</h3>
      </MinMaxContainer>
    </>
  )
}

export { MinMax }