import ServiceRAWG from "../services/RAGW";
import Card from "../components/card";
import CardSkeleton from "../components/skeletons/card-skeleton";
import DropDownFiltre from "../components/dropDownFiltre";
import { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const serviceRAWG = new ServiceRAWG();

function JeuxPage() {
  const [Games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const newGames = await serviceRAWG.allGame(order, page, search);
        setGames((prevGames) => [...prevGames, ...newGames]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (isFirstRender.current) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      isFirstRender.current = false;
      fetchGames();
      return;
    }

    if (isFirstRender.current == false && page > 1) {
      fetchGames();
    }
  }, [order, search, page]);

  const listItems = Games.map((game) => <Card key={game.id} data={game} />);
  return (
    <div className="container mx-auto px-4">
      {/* search component and filtre*/}
      <div className="py-10 pb-0">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="hs-dropdown-open:rotate-180 w-6 h-w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                fill="none"
                width="24"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm3-80q19 0 34.5-10t23.5-27l28-57q15-31 44-48.5t63-17.5h190q34 0 63 18t45 48l28 57q8 17 23.5 27t34.5 10q28 0 48-18.5t21-46.5q0 1-2-19l-84-335q-7-27-28-44t-49-17H285q-28 0-49.5 17T208-659l-84 335q-2 6-2 18 0 28 20.5 47t49.5 19Zm348-280q17 0 28.5-11.5T580-560q0-17-11.5-28.5T540-600q-17 0-28.5 11.5T500-560q0 17 11.5 28.5T540-520Zm80-80q17 0 28.5-11.5T660-640q0-17-11.5-28.5T620-680q-17 0-28.5 11.5T580-640q0 17 11.5 28.5T620-600Zm0 160q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440Zm80-80q17 0 28.5-11.5T740-560q0-17-11.5-28.5T700-600q-17 0-28.5 11.5T660-560q0 17 11.5 28.5T700-520Zm-360 60q13 0 21.5-8.5T370-490v-40h40q13 0 21.5-8.5T440-560q0-13-8.5-21.5T410-590h-40v-40q0-13-8.5-21.5T340-660q-13 0-21.5 8.5T310-630v40h-40q-13 0-21.5 8.5T240-560q0 13 8.5 21.5T270-530h40v40q0 13 8.5 21.5T340-460Zm140-20Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="rechercher un jeu ici ..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              if (document.getElementById("simple-search").value == "") return;
              setGames([]);
              setLoading(true);
              setSearch(document.getElementById("simple-search").value);
              setOrder(order);
              document.getElementById("simple-search").value = "";
            }}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      <div className="py-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          Trouvez votre jeu vidéo préféré
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Vous pouvez rechercher un jeu vidéo par son nom ou par son popularité
          ou par sa date de sortie.
        </p>
        <div className="flex items-start gap-2">
          {search != "" && (
            <button
              type="button"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              onClick={() => {
                setSearch("");
                setGames([]);
                setLoading(true);
              }}
            >
              {search}
              <svg
                className="hs-dropdown-open:rotate-180 w-4 h-w-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                fill="none"
                width="16"
                viewBox="0 -960 960 960"
              >
                <path
                  d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          )}
          <DropDownFiltre
            setGames={setGames}
            setLoading={setLoading}
            setOrder={setOrder}
            order={order}
          />
        </div>
      </div>
      {/* affichage des jeux */}
      <InfiniteScroll
        dataLength={Games.length}
        next={() => {
          setPage(page + 1);
        }}
        loader={
          <div className="flex items-center justify-center p-10">
            <div
              className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-gray-400 rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
        hasMore={true}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <CardSkeleton nombre={10} />}
          {listItems}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default JeuxPage;
