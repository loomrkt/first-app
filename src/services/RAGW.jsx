import { environement } from "../apiKey";

const BASE_URL = "https://api.rawg.io/api/";

class ServiceRAWG {
  getDetailGame = async (idGame) => {
    const res = await fetch(
      `${BASE_URL}games/${idGame}?key=${environement.RAWG}`
    );
    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    const data = await res.json();
    return data;
  };

  recentGame = async (nombre) => {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    const formattedToday = today.toISOString().split("T")[0];
    const formattedThirtyDaysAgo = thirtyDaysAgo.toISOString().split("T")[0];

    const res = await fetch(
      `${BASE_URL}games?key=${environement.RAWG}&dates=${formattedThirtyDaysAgo},${formattedToday}&ordering=-rating&page_size=${nombre}`
    );
    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    const data = await res.json();
    return data.results;
  };
  allGame = async (ordering, nombre, search) => {
    const res = await fetch(
      `${BASE_URL}games?key=${environement.RAWG}&ordering=-${ordering}&page_size=${nombre}&dates=1969-12-31,2029-12-31&search=${search}`
    );
    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    const data = await res.json();
    return data.results;
  };
}

export default ServiceRAWG;
