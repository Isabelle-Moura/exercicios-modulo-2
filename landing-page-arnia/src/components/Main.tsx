import { PBold } from "../styles/Main";
import { MainText } from "../styles/Main";
import { UList } from "../styles/Main";
import { UListItem } from "../styles/Main";
// import MainForm from "./MainForm";

const Main = () => {
  return (
    <>
      <PBold>
        Você sabia que no Brasil existirão por volta de 260 mil vagas na <br />
        área de TI até 2024? Venha se formar na profissão mais quente <br /> do
        mundo. Venha estudar na Arnia.
      </PBold>
      <MainText>
        Baixe agora mesmo o e-book “O passo-a-passo para se tornar um
        desenvolvedor <br />
        de software”, escrito por nossa qualificada equipe de profissionais e
        você aprenderá:
      </MainText>
      <UList>
        <UListItem>
          As diferenças básicas entre as diferentes vagas de TI do mercado
        </UListItem>
        <UListItem>Onde começar a estudar</UListItem>
        <UListItem>
          Quais habilidades são necessárias para um desenvolvedor de software
        </UListItem>
        <UListItem>
          O que as empresas esperam de uma entrevista de emprego
        </UListItem>
      </UList>
      {/* <MainForm /> */}
    </>
  );
};

export default Main;
