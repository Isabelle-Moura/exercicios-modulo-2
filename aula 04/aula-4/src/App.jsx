import ImageCarousel from "./components/ImageCarousel";
import Numbers from "./components/Numbers";
import List from "./components/List";
import MotivationalQuotes from "./components/Phrases";

function App() {
  return (
    <>
      <div>
        <h1>Gerador de Frases Motivacionais</h1>
        <MotivationalQuotes />
      </div>

      <div>
        <h1>Contador de Número</h1>
        <Numbers />
      </div>

      <div>
        <h1>Lista de Músicas</h1>
        <List />
      </div>

      <div>
        <h1>Imagens</h1>
        <ImageCarousel />
      </div>
    </>
  );
}

export default App;
