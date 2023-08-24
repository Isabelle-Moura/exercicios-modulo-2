/* 1 - Crie um formulário de endereço. Este formulário deverá pedir ao usuário o CEP, nome da rua, número, 
complemento, bairro, cidade e estado.*/

/* 2 - Crie um componente de avaliação de produtos que permita ao usuário avaliar um produto em uma escala de 1 a 5 
estrelas. O componente deve incluir um formulário com uma escolha de estrelas e um campo de texto para escrever 
uma revisão. Quando o formulário for enviado, exiba a avaliação na tela.*/

/* 3 - Faça uma navegação de páginas entre a página de formulário de endereço e a página de avaliação de produtos. 
Utilize literal types para determinar no state qual página está selecionada.*/

import { Component } from "react";
import { FormContainer } from "./FormStyle";
import { FormButton } from "./FormStyle";
import { FormInput } from "./FormStyle";
import { FormLabel } from "./FormStyle";

type AddressFormFields = {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
};

class AddressForm extends Component {
  state: AddressFormFields = {
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data:", this.state);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<
      AddressFormFields,
      keyof AddressFormFields
    >);
  };

  render() {
    const { cep, street, number, complement, neighborhood, city, state } =
      this.state;

    return (
      <>
        <h2>Address Form</h2>
        <FormContainer>
          <form onSubmit={this.handleSubmit}>
            <div>
              <FormLabel>CEP:</FormLabel>
              <FormInput
                type="text"
                name="cep"
                value={cep}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <FormLabel>Street:</FormLabel>
              <FormInput
                type="text"
                name="street"
                value={street}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <FormLabel>Number:</FormLabel>
              <FormInput
                type="text"
                name="number"
                value={number}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <FormLabel>Complement:</FormLabel>
              <FormInput
                type="text"
                name="complement"
                value={complement}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <FormLabel>Neighborhood:</FormLabel>
              <FormInput
                type="text"
                name="neighborhood"
                value={neighborhood}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <FormLabel>City:</FormLabel>
              <FormInput
                type="text"
                name="city"
                value={city}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <FormLabel>State:</FormLabel>
              <FormInput
                type="text"
                name="state"
                value={state}
                onChange={this.handleChange}
              />
            </div>
            <FormButton type="submit">Submit</FormButton>
          </form>
        </FormContainer>
      </>
    );
  }
}

export default AddressForm;
