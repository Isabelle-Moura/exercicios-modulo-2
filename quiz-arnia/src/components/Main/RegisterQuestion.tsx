const RegisterQuestion = () => {
  return (
    <>
      <div>
        <form>
          <label>Pergunta</label>
          <input type="text" />
          <div>
            <label>Alternativa 1</label>
            <input />
            <label>Correta?</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Alternativa 2</label>
            <input />
            <label>Correta?</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Alternativa 3</label>
            <input />
            <label>Correta?</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Alternativa 4</label>
            <input />
            <label>Correta?</label>
            <input type="checkbox" />
          </div>
          <button type="submit">SALVAR</button>
        </form>
      </div>
    </>
  );
};

export default RegisterQuestion;
