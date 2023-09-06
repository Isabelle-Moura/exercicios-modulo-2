import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>;
      <button onClick={() => navigate("/contact")}>
        Entre em contato agora!
      </button>
    </>
  );
};

export default HomePage;
