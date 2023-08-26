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
    </>
  );
};

export default App;
