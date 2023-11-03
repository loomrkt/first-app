/* eslint-disable react/prop-types */
import BadgeList from "./badgeList";
import Rating from "./rating";
import { Link } from "react-router-dom";
import DateFormat from "./dateFormat";

function Card({ data }) {
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-md dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div
        className="h-52 flex flex-col justify-center items-cente rounded-t-xl overflow-hidden "
        style={{ backgroundColor: `#${data.dominant_color}` }}
      >
        <img src={data.background_image} alt="" />
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white mb-2">
          {data.name}
        </h3>
        <div className="mb-2">
          <h3 className="inline-block text-base font-semibold text-gray-800 dark:text-gray-300 mr-2">
            Date de sortie :
          </h3>
          <span className="text-gray-500 dark:text-gray-400 text-sm mr-2">
            <DateFormat date={data.released} />
          </span>
        </div>
        {data.genres ? <BadgeList bagsList={data.genres} /> : ""}
        {data.rating >= 1 && <Rating nombre={data.rating} />}
      </div>
      <Link
        to={`/jeux/${data.id}`}
        className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
      >
        <span className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 cursor-pointer">
          Voir Plus
        </span>
      </Link>
    </div>
  );
}

export default Card;
