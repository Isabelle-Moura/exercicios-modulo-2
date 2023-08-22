type CatFact = {
  fact: string;
  lenght: number;
};

const getCatFact = async (): Promise<CatFact> => {
  const response = await fetch("https://catfact.ninja/fact");
  const apiJson = await response.json();
  return apiJson;
};

