import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BadgeList from "../components/badgeList";
import Rating from "../components/rating";
import DateFormat from "../components/dateFormat";
import ServiceRAWG from "../services/RAGW";
import HtmlParser from "react-html-parser";
import DetailSkeleton from "../components/skeletons/detail-skeleton";
const serviceRAWG = new ServiceRAWG();

function DetailPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clamp, setClamp] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const game = await serviceRAWG.getDetailGame(id);
        setGame(game);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGame();
  }, [id]);
  console.log(game);
  return (
    <>
      {loading && <DetailSkeleton />}
      {!loading && game && (
        <>
          <div className="sm:flex items-stretch justify-center gap-x-10 block px-5 sm:px-10 mt-4">
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full sm:w-1/2 max-h-96 object-cover object-center"
            />
            <div className="w-full sm:w-1/2 m-2 sm:m-0">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
                {game.name}
              </h2>
              <div className="mb-2">
                <h3 className="inline-block text-base font-semibold text-gray-800 dark:text-gray-300 mr-2">
                  Date de sortie :
                </h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm mr-2">
                  <DateFormat date={game.released} />
                </span>
              </div>
              {game.genres ? <BadgeList bagsList={game.genres} /> : ""}
              {game.rating >= 1 && <Rating nombre={game.rating} />}
              <div className="mb-2">
                <h3 className="inline-block text-base font-semibold text-gray-800 dark:text-gray-300 mr-2">
                  Plateformes :
                </h3>
                {game.platforms.map((platform, i) => (
                  <span
                    className="text-gray-500 dark:text-gray-400 text-sm mr-2"
                    key={i}
                  >
                    {platform.platform.name}
                    {i < game.platforms.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
              <div className="mb-2">
                <h3 className="inline-block text-base font-semibold text-gray-800 dark:text-gray-300 mr-2">
                  Développeurs :
                </h3>
                {game.developers.map((developer, i) => (
                  <span
                    className="text-gray-500 dark:text-gray-400 text-sm mr-2"
                    key={i}
                  >
                    {developer.name}
                    {i < game.developers.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
              <div className="mb-2">
                <h3 className="inline-block text-base font-semibold text-gray-800 dark:text-gray-300 mr-2">
                  Éditeurs :
                </h3>
                {game.publishers.map((publisher, i) => (
                  <span
                    className="text-gray-500 dark:text-gray-400 text-sm mr-2"
                    key={i}
                  >
                    {publisher.name}
                    {i < game.publishers.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="px-5 sm:px-10 mt-5">
            <p
              className={
                clamp
                  ? `text-gray-500 dark:text-gray-400 line-clamp-3`
                  : `text-gray-500 dark:text-gray-400 line-clamp-none`
              }
            >
              {HtmlParser(game.description)}
            </p>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => setClamp(!clamp)}
            >
              {clamp ? "Lire plus" : "Lire moins"}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default DetailPage;
