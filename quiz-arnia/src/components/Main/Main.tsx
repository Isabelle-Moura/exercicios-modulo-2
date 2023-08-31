import { useState } from "react";
import RegisterQuestion from "./RegisterQuestion";
import ListQuestions from "./ListQuestions";

const Main = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = () => {
    if (page === 1) {
      setPage(2);
    }
    if (page === 2) {
      setPage(1);
    }
  };
  return (
    <>
      {page === 1 && (
        <div>
          <RegisterQuestion />
        </div>
      )}
      {page === 2 && (
        <div>
          <ListQuestions />
        </div>
      )}
    </>
  );
};

export default Main;
