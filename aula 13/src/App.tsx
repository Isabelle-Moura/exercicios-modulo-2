/* Faça um programa React que possui três páginas. Uma Home com um menu para as duas outras páginas (Sobre e Contato).
A página Sobre deverá ter uma imagem e um texto informativo sobre você.
A página Contato deverá ter um formulário que pede nome, telefone, e-mail e mensagem da pessoa. 
Adicione dois botões na página home, um que envia para a página de contato para o contato ser via e-mail. E outro que envia para a página de contar, com o contato via whatsapp.
Construa um componente chamado BaseLayout com um cabeçalho escrito o seu nome. 
Você deverá usar o Outlet para renderizar as outras páginas.
 */

import GlobalStyle from "./styles/GlobalStyle";
import Router from "./router/router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
