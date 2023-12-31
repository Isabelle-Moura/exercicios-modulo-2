import ItemComponent from "./Item";
import { ListContainer } from "../styles/tasksStyle";

interface ItemListProps {
  itens: ItemType[];
}

const ItemList = ({ itens }: ItemListProps) => {
  return (
    <>
      <ListContainer>
        {itens.map((item, index) => (
          <ItemComponent key={index} item={item} />
        ))}
      </ListContainer>
    </>
  );
};

export default ItemList;
