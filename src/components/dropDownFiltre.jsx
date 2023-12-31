// eslint-disable-next-line react/prop-types
function DropDownFiltre({ setGames, setLoading, setOrder, order }) {
  return (
    <div className="hs-dropdown relative inline-flex [--trigger:hover]">
      <button
        id="hs-dropdown-hover-event"
        type="button"
        className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        Ordering by :{" " + order}
        <svg
          className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:left-0 after:w-full before:h-4 before:absolute before:-top-4 before:left-0 before:w-full"
        aria-labelledby="hs-dropdown-hover-event cursor-pointer"
      >
        {" "}
        <div
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
          onClick={() => {
            if (order != "") {
              setGames([]);
              setLoading(true);
              setOrder("");
            }
          }}
        >
          Default
        </div>
        <div
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
          onClick={() => {
            if (order != "rating") {
              setGames([]);
              setLoading(true);
              setOrder("rating");
            }
          }}
        >
          Rating
        </div>
        <div
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
          onClick={() => {
            if (order != "released") {
              setGames([]);
              setLoading(true);
              setOrder("released");
            }
          }}
        >
          Released
        </div>
        <div
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
          onClick={() => {
            if (order != "name") {
              setGames([]);
              setLoading(true);
              setOrder("name");
            }
          }}
        >
          Name
        </div>
        <div
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
          onClick={() => {
            if (order != "updated") {
              setGames([]);
              setLoading(true);
              setOrder("updated");
            }
          }}
        >
          Updated
        </div>
      </div>
    </div>
  );
}

export default DropDownFiltre;
