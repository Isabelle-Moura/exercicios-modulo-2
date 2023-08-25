/* 1. Lista de Itens 
Crie um aplicativo de lista de itens onde cada item pode ser do tipo "tarefa", "evento" ou "lembrete". Você deve renderizar cada item de acordo com o seu tipo, aplicando estilos diferentes e exibindo informações relevantes.

Requisitos:

- Defina três tipos de item: "tarefa", "evento" e "lembrete", cada um com propriedades específicas.
- Crie um componente chamado Item que recebe um item como prop e renderiza-o de acordo com seu tipo.
- Utilize Styled Components para aplicar estilos diferentes para cada tipo de item.
- Crie um componente ItemList que recebe uma lista de itens e renderiza a lista utilizando o componente Item.

2.Caixa de Notificações

Desenvolva uma caixa de notificações que pode exibir diferentes tipos de notificações: "erro", "aviso" e "informação". Cada notificação deve ser renderizada com um estilo e conteúdo específicos.

Requisitos:

- Defina três tipos de notificação: "erro", "aviso" e "informação", cada um com uma mensagem.
- Crie um componente chamado Notification que recebe uma notificação como prop e renderiza-a com um estilo de acordo com o tipo.
- Utilize Styled Components para aplicar estilos diferentes para cada tipo de notificação.
- Crie um componente NotificationBox que recebe uma lista de notificações e renderiza cada notificação utilizando o componente Notification. */

import ItemList from "./components/ItemList";

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

  return (
    <>
      <div>
        <ItemList itens={itens} />
      </div>
    </>
  );
};

export default App;
