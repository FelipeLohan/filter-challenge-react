import styled from "styled-components";
import { CtaButton } from "../CtaButton";
import { Input } from "../Input";

const FilterContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Filter = () => {
  return (
    <>
      <FilterContainer>
        <FormContainer>
          <Input
            placeholderText="Preço mínimo"
            inputType="number"
            name="minPrice"
            value={0}
          />
          <Input
            placeholderText="Preço máximo"
            inputType="number"
            name="maxPrice"
            value={0}
          />
          <CtaButton type="submit" text="Filtrar" />
        </FormContainer>
      </FilterContainer>
    </>
  );
};

export { Filter };
