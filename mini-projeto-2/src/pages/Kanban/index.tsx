import Header from "../../components/Home/Header";
import * as S from "../../components/Home/Column/style";
import CreateCard from "../../components/Home/CreateCard";
import { useCards } from "../../context/CardContext";
import { useEffect } from "react";
import { getCards } from "../../services/card-service";
import Cards from "../../components/Home/Cards";

const Home = () => {
  const { setCards } = useCards();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCards();
        setCards(response);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [setCards]);

  return (
    <>
      <Header />
      <S.ColumnsContainer>
        <CreateCard />
        <Cards title="To Do" type="TODO" />
        <Cards title="Doing" type="DOING" />
        <Cards title="Done" type="DONE" />
      </S.ColumnsContainer>
    </>
  );
};

export default Home;
