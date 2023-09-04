/* 
1 - Faça um programa em React/TS que escreve no centro da tela uma mensagem aleatória. Esta mensagem deverá vir da API https://github.com/lukePeavey/quotable. Utilize o useEffect para fazer este fetch.

2 - Usando a API do Star Wars (https://swapi.dev/) faça  uma página que apresente uma tabela. Esta tabela deverá conter os seguintes dados acerca de planetas: Nome, Período de Rotação, Período Orbital, Diâmetro e População. 
Abaixo da tabela deverá ser renderizado dois botões, para atualizar os dados da tabela com outros planetas da api ou voltar aos anteriores. Veja que os botões só podem ser renderizados caso o link para busca de novos planetas ou de planetas anteriores exista. Estilize a tabela da forma que achar melhor.

3 - Utilizando a API do Rick and Morty (https://rickandmortyapi.com/) faça uma recriação da página inicial da API, que apresenta 6 cards com personagens. Utilize a seguinte rota para buscar os 6 primeiros personagens, que deverão aparecer quando a página carregar https://rickandmortyapi.com/api/character/1,2,3,4,5,6. Veja que os ids dos personagens são sequenciais e passados ao final da URL. Crie um botão ao final da página que ao ser clicado, irá aleatorizar 6 números entre 1 e 826 e irá buscar estes personagens para apresentar nos cards da tela. 

Lembre-se: Utilize as boas práticas do useEffect e useCallback, não deixe nenhum warning de linter no seu código.

*/

import Quotes from "./components/Quotes";
import RickAndMorty from "./components/RickAndMorty";
import StarWars from "./components/StarWars";

const App = () => {
  return (
    <>
      <Quotes />
      <hr />
      <StarWars />
      <hr />
      <RickAndMorty />
    </>
  );
};

export default App;
