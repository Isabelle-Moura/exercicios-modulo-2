import { Mock } from "../main/Mock";
import { NewItem } from "../item/newsType";
import { Thumb } from "../image/Image";

type Props = {
  item: NewItem;
};

export const Details = ({ item }: Props) => {
  return (
    <Mock>
      <h1>{item.title}</h1>
      <p>{item.summary}</p>
      <Thumb>{item.image}</Thumb>
    </Mock>
  );
};