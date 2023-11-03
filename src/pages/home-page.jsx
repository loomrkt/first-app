/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import ServiceRAWG from "../services/RAGW";
import Card from "../components/card";
import CardSkeleton from "../components/skeletons/card-skeleton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const serviceRAWG = new ServiceRAWG();
function HomePage() {
  const [recentGames, setRecentGames] = useState([]);
  const [loading, setLoading] = useState(true);
  // choix de nombre de donnée
  const isMobile = window.innerWidth < 640;
  const isTablette = window.innerWidth < 1024;
  let nombreShow = 9;
  if (isMobile) {
    nombreShow = 4;
  } else if (isTablette) {
    nombreShow = 6;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const fetchRecentGames = async () => {
      try {
        const games = await serviceRAWG.recentGame(nombreShow);
        setLoading(false);
        setRecentGames(games);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecentGames();
  }, [nombreShow]);

  const listItems = recentGames.map((game) => (
    <Card key={game.id} data={game} />
  ));

  return (
    <>
      {/* //   hero section */}
      <div className="relative overflow-hidden mb-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
              L’arène
              <span className="text-blue-600"> ultime </span>
              pour les jeux en ligne
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Plongez dans l’univers de ConsoleConnection , une plateforme
              innovante pour partager et explorer une variété de jeux en ligne.
              Rejoignez notre communauté mondiale et commencez votre aventure de
              jeu dès aujourd’hui!
            </p>
          </div>

          <div className="mt-10 relative max-w-5xl mx-auto">
            <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('/src/assets/game.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
            <div className="absolute inset-0 w-full h-full">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <Link
                  to={"/jeux"}
                  className="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black"
                >
                  <img
                    src="logo.png"
                    loading="lazy"
                    className="w-8 h-8 me-2"
                    alt="logo"
                  />
                  Joueur maintenant
                </Link>
              </div>
            </div>

            <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
              <div className="bg-white w-48 h-48 rounded-lg dark:bg-amber-200"></div>
            </div>

            <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
              <div className="bg-white w-48 h-48 rounded-full dark:bg-amber-200"></div>
            </div>
          </div>
        </div>
      </div>
      {/* // end of hero section */}
      {/* recent game */}
      <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 text-center">
        Voici quelque <span className="text-blue-600">meilleurs</span> jeux
        recent
      </h2>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <CardSkeleton nombre={nombreShow} />}
          {listItems}
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            to={"/jeux"}
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 mt-10"
          >
            Voir plus de jeux
          </Link>
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* end of recent game */}

      <div className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div className="col-span-3">
                <img
                  loading="lazy"
                  className="rounded-xl"
                  src="https://media.rawg.io/media/screenshots/dbf/dbfcd081f128ff0d1467beb47ef370a0.jpg"
                  alt="Image Description"
                />
              </div>

              <div className="col-span-4">
                <img
                  loading="lazy"
                  className="rounded-xl"
                  src="https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
                  alt="Image Description"
                />
              </div>

              <div className="col-span-5">
                <img
                  loading="lazy"
                  className="rounded-xl"
                  src="https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  ConsoleConnection est une plateforme de jeux en ligne
                </h2>
                <p className="text-gray-500">
                  Voici quelques raisons pour lesquelles vous devriez utiliser
                  notre site, ConsoleConnection.
                </p>
              </div>

              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">Variété </span>de jeux
                  </span>
                </li>

                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base text-gray-500">
                    Communauté dynamique
                  </span>
                </li>

                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base text-gray-500">
                    Expérience utilisateur
                    <span className="font-bold"> optimisée</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
