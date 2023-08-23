// Tipos para as respostas das APIs

type CatFactResponse = {
  fact: string;
  length: number;
};

type BoredActivityResponse = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
};

type UniversityResponse = {
  name: string;
  country: string;
  web_pages: string[];
};

type PopulationDataResponse = {
  data: {
    [key: string]: string;
  }[];
};

type RandomUserResponse = {
  results: {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: string;
    };
    email: string;
    dob: {
      date: string;
      age: number;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }[];
};

// Função para fazer uma solicitação GET e tipar a resposta

async function getApiResponse<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// URLs das APIs

const catFactUrl = "https://catfact.ninja/fact";
const boredApiUrl = "https://www.boredapi.com/api/activity";
const universityApiUrl =
  "http://universities.hipolabs.com/search?country=Brazil";
const populationApiUrl =
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
const randomUserApiUrl = "https://randomuser.me/api/";

// Exemplos de uso

const catFactData = await getApiResponse<CatFactResponse>(catFactUrl);
console.log(catFactData);

const boredActivityData = await getApiResponse<BoredActivityResponse>(
  boredApiUrl
);
console.log(boredActivityData);

const universityData = await getApiResponse<UniversityResponse>(
  universityApiUrl
);
console.log(universityData);

const populationData = await getApiResponse<PopulationDataResponse>(
  populationApiUrl
);
console.log(populationData);

const randomUserData = await getApiResponse<RandomUserResponse>(
  randomUserApiUrl
);
console.log(randomUserData);
export {};
