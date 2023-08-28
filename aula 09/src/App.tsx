/* 1. Lista de Itens 
Crie um aplicativo de lista de itens onde cada item pode ser do tipo "tarefa", "evento" ou "lembrete". Você deve renderizar cada item de acordo com o seu tipo, aplicando estilos diferentes e exibindo informações relevantes.

Requisitos:

- Defina três tipos de item: "tarefa", "evento" e "lembrete", cada um com propriedades específicas.
- Crie um componente chamado Item que recebe um item como prop e renderiza-o de acordo com seu tipo.
- Utilize Styled Components para aplicar estilos diferentes para cada tipo de item.
- Crie um componente ItemList que recebe uma lista de itens e renderiza a lista utilizando o componente Item.

2. Caixa de Notificações

Desenvolva uma caixa de notificações que pode exibir diferentes tipos de notificações: "erro", "aviso" e "informação". Cada notificação deve ser renderizada com um estilo e conteúdo específicos.

Requisitos:

- Defina três tipos de notificação: "erro", "aviso" e "informação", cada um com uma mensagem.
- Crie um componente chamado Notification que recebe uma notificação como prop e renderiza-a com um estilo de acordo com o tipo.
- Utilize Styled Components para aplicar estilos diferentes para cada tipo de notificação.
- Crie um componente NotificationBox que recebe uma lista de notificações e renderiza cada notificação utilizando o componente Notification. 

3. Aplicativo de Carrinho de Compras

Desenvolva um aplicativo de carrinho de compras que permite adicionar produtos físicos e digitais ao carrinho. Você deve renderizar cada item de acordo com o seu tipo, exibindo informações relevantes.

Requisitos:

Defina dois tipos de produto: "físico" e "digital", cada um com propriedades específicas.
Crie um componente chamado CartItem que recebe um produto como prop e renderiza-o de acordo com seu tipo.
Exiba informações adicionais relevantes para cada tipo de produto, como o peso para produtos físicos e o link de download para produtos digitais.
Utilize Styled Components para estilizar os componentes de acordo com seus tipos.
Crie um componente Cart que recebe uma lista de produtos no carrinho e renderiza a lista utilizando o componente CartItem.

4. Lista de empresas

Desenvolva um catálogo de empresas, de acordo com o objeto contido neste gist. Siga as instruções a seguir:
Crie um tipo para a empresa. Observe que nem todas as empresas possuem todos os valores preenchidos.
Faça a renderização de uma lista de cards contendo as informações da empresa. Porém atente-se que, quando uma informação não existir, ela não deverá ser mostrada no card (nem mesmo a label).*/

import ItemList from "./componentsTasks/ItemList";
import NotificationBox from "./componentsNotes/NotificationBox";
import CartList from "./componentsShopApp/CartList";
import CompanyList from "./componentsCompany/CompanyList";

const App = () => {
  const itens = [
    {
      type: "task",
      description: "Fazer exercícios da Arnia",
      concluded: true,
    } as Tasks,
    {
      type: "event",
      name: "Ir para a reunião da empresa.",
      date: "28/08/23",
    } as Events,
    {
      type: "reminder",
      text: "Fazer as unhas e o cabelo ás 14hrs.",
    } as Reminders,
  ];

  const notifications = [
    { type: "error", message: "Erro ao carregar página." } as ErrorNotification,
    {
      type: "warning",
      message: "Aviso: Reunião da empresa às 15h.",
    } as WarningNotification,
    {
      type: "info",
      message: "Novos recursos disponíveis.",
    } as InfoNotification,
  ];

  const products = [
    {
      type: "digital",
      name: "E-book",
      price: 9.99,
      buyingLink: "https://example.com/ebook-link",
    } as DigitalProducts,
    {
      type: "fisical",
      name: "Livro",
      price: 29.99,
      weight: "500g",
    } as FisicalProducts,
  ];

  const mockCompanies = [
    {
      id: "1c779bf1-2ea3-4c46-b2b2-3481c9a82092",
      name: "Company A",
      email: "companya@example.com",
      phone: "123-456-7890",
      linkedin: "linkedin.com/companya",
      address: "123 Main Street, City A",
    },
    {
      id: "2f8e6b98-158c-4c47-8d6b-163914e40c0f",
      name: "Company B",
      phone: "234-567-8901",
      linkedin: "linkedin.com/companyb",
      address: "456 Oak Avenue, City B",
    },
    {
      id: "3d9f90a8-6ac8-40a2-a9b4-b9ab7057c5b9",
      name: "Company C",
      email: "companyc@example.com",
      linkedin: "linkedin.com/companyc",
      address: "789 Elm Street, City C",
    },
    {
      id: "4b6e8d5c-1f2b-45d3-8e7f-a2c46594d732",
      name: "Company D",
      phone: "345-678-9012",
      address: "123 Pine Avenue, City D",
    },
    {
      id: "5a6b7c8d-e9f0-4a5b-8c6d-d7e8f9a0b1c2",
      name: "Company E",
      email: "companye@example.com",
      linkedin: "linkedin.com/companye",
      address: "456 Maple Street, City E",
    },
    {
      id: "6d7e8f9a-b0c1-4d5e-6f7a-8b9c0d1e2f3",
      name: "Company F",
      phone: "456-789-0123",
      linkedin: "linkedin.com/companyf",
      address: "789 Oak Avenue, City F",
    },
    {
      id: "7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      name: "Company G",
      email: "companyg@example.com",
      address: "123 Elm Street, City G",
    },
    {
      id: "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3",
      name: "Company H",
      phone: "567-890-1234",
      linkedin: "linkedin.com/companyh",
      address: "456 Pine Avenue, City H",
    },
    {
      id: "9e0f1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b",
      name: "Company I",
      email: "companyi@example.com",
      linkedin: "linkedin.com/companyi",
      address: "789 Maple Street, City I",
    },
    {
      id: "0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
      name: "Company J",
      address: "123 Oak Avenue, City J",
    },
  ];

  return (
    <>
      <div>
        <ItemList itens={itens} />
      </div>
      <div>
        <NotificationBox notifications={notifications} />
      </div>
      <div>
        <CartList products={products} />
      </div>
      <div>
        <CompanyList companies={mockCompanies} />
      </div>
    </>
  );
};

export default App;
