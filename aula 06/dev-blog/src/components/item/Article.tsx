import { NewItem as ItemType } from "./newsType";
import { Thumb } from "../image/Image";
import { Flex, Title, Info } from "./styled";

type Props = {
  item: ItemType;
  handleClick: () => void;
};

export const Article = ({ item, handleClick }: Props) => {
  return (
    <Flex onClick={handleClick}>
      <Thumb src={item.image} alt={item.title} />
      <Info>
        <Title>{item.title}</Title>
        <p>{item.summary}</p>
      </Info>
    </Flex>
  );
};
