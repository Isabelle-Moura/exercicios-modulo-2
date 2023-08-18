import { Details } from "./components/pages/details";
import { useState } from "react";
import Global from "./assets/global";
import { Home } from "./components/pages/home";
import { NewItem } from "./components/item/newsType";

const news = [
  {
    id: 1,
  title: "Python, Ciência de Dados e SQL: busca por capacitação em TI pode crescer até 20% em 2023",
  summary: "A área de tecnologia é uma das mais promissoras para 2023, segundo levantamento exclusivo do Infojobs. Todos os holofotes acesos sobre a carreira estão movimentando plataformas de educação.",
  image: "https://observatorio3setor.org.br/wp-content/uploads/2023/02/homem-de-codificacao-1--scaled-e1677599246495-1536x922.jpg",
  },
  {
  id: 2,
  title: "Estado oferece acesso gratuito a curso de Programação da Universidade Harvard ",
  summary: "Por meio de uma parceria entre Governo de Minas e Fundação Estudar, está disponível a versão em português do Curso de Introdução a Programação da Universidade de Harvard, uma das mais prestigiadas do mundo.",
  image: "https://www.agenciaminas.mg.gov.br/ckeditor_assets/pictures/16272/content_valelelele.jpg",
  },
  {
  id: 3,
  title: "Como robôs 'programadores' que escrevem códigos devem mudar o trabalho de profissionais de TI",
  summary: "Ferramentas como ChatGPT e GitHub Copilot poupam esforço, mas exigem aptidão para editar códigos e corrigir possíveis erros.",
  image: "https://s2-g1.glbimg.com/MnUHHqdaN7x9Sk5jFSp19Dz1vvQ=/438x0:1008x403/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/y/r/FPsqMDQCGB3IvPUxR2qA/codigo-bot-python.jpeg",
  },
]

const App = () => {
  const [currentNews, setCurrentNews] = useState<NewItem>()

  const addNews = (newItem: NewItem) => {
    setCurrentNews(newItem)
  }
    return (
    <>
      <Global />

      {currentNews != null ? <Details item={currentNews}/> : <Home news={news} changeNews={addNews}/>}
    </>
  );
};

export default App