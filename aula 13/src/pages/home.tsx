import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/contact")}>
        Entre em contato por E-mail
      </button>{" "}
      <br />
      <button onClick={() => navigate("/about")}>
        Entre em contato por Whatsapp
      </button>
    </>
  );
};

export default HomePage;
