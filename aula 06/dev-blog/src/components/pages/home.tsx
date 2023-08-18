import { Mock } from "../main/Mock";
import { Article } from "../item/Article";
import { NewItem as ItemType, News } from "../item/newsType";

type Props = {
  news: News;
  changeNews: (newItem: ItemType) => void;
};

export const Home = ({ news, changeNews }: Props) => {
  return (
    <>
      <Mock>
        <div>
          {news.map((item) => (
            <Article
              item={item}
              key={item.id}
              handleClick={() => changeNews(item)}
            />
          ))}
        </div>
      </Mock>
    </>
  );
};