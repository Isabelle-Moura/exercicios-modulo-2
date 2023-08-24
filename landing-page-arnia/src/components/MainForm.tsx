import {
  FormContainer,
  FormHeader,
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from "../styles/MainForm";
import React, { useState } from "react";

const MainForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    answer: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const apiEndpoint = "https://landing-page-api.vercel.app/api/lead";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          name: formData.name,
        }),
      });

      if (response.ok) {
        console.log(
          "Formulário enviado com sucesso! Os dados do formulário são:",
          formData
        );
      } else {
        console.error("Erro ao enviar o formulário:", response.status);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <>
      <FormContainer>
        <FormHeader>
          Preencha o formulário abaixo e <br />
          tenha acesso ao e-book “O
          <br />
          passo-a-passo para se tornar <br /> um desenvolvedor de Software”
        </FormHeader>
        <Form onSubmit={handleSubmit}>
          <FormLabel>Nome*</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <FormLabel>E-mail*</FormLabel>
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <FormLabel>Telefone (Whatsapp)*</FormLabel>
          <FormInput
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <FormLabel>5 + 2 - 3?</FormLabel>
          <FormInput
            type="number"
            name="answer"
            value={formData.answer}
            onChange={handleInputChange}
            required
          />
          <FormButton
            type="submit"
            onClick={() => {
              alert("Começando o download do e-book...");
            }}
          >
            BAIXAR E-BOOK
          </FormButton>
        </Form>
      </FormContainer>
    </>
  );
};

export default MainForm;
