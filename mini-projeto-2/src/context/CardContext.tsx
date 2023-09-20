import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface CardContextProps {
  cards: Cards;
  setCards: Dispatch<SetStateAction<Cards>>;
}

interface CardProviderProps {
  children: ReactNode;
}

const CardContext = createContext<CardContextProps>({
  cards: [],
  setCards: () => [],
});

export const CardProvider = ({ children }: CardProviderProps) => {
  const [cards, setCards] = useState<Cards>([]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCards = () => {
  return useContext(CardContext);
};
