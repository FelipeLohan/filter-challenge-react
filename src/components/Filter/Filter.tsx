import styled from "styled-components";
import { CtaButton } from "../CtaButton";
import { Input } from "../Input";
import { useContext, useState } from "react";
import * as productService from "../../services/product-service.ts"
import { ContextProductList } from "../../utils/context-productList.ts";

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

  const {setContextProductList} = useContext(ContextProductList)

  type FormData = {
    minPrice?: number,
    maxPrice?: number
  }

  const [formData, setFormData] = useState<FormData>({})

  function handleChange(e: any){
    const value = Number(e.target.value);
    const name = e.target.name;

    setFormData({...formData, [name]: value})
  }

  function handleFilterButton(e: any){
    e.preventDefault();

    const filteredProducts = productService.findByPrice(formData.minPrice || 0, formData.maxPrice || Number.MAX_VALUE);
      
    setContextProductList(filteredProducts)

  }

  return (
    <>
      <FilterContainer>
        <FormContainer>
          <Input
            placeholderText="Preço mínimo"
            inputType="number"
            name="minPrice"
            value={formData.minPrice || ""}
            handleChange={handleChange}
          />
          <Input
            placeholderText="Preço máximo"
            inputType="number"
            name="maxPrice"
            value={formData.maxPrice || ""}
            handleChange={handleChange}
          />
          <CtaButton type="submit" text="Filtrar" handleClick={handleFilterButton} />
        </FormContainer>
      </FilterContainer>
    </>
  );
};

export { Filter };
