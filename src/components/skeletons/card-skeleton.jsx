function CardSkeleton({ nombre }) {
  return Array(nombre)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="group flex flex-col h-full bg-white border border-gray-200 shadow-md dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] animate-pulse"
      >
        <div className="h-52 flex flex-col justify-center items-cente rounded-t-xl">
          <span className="w-full h-full block bg-gray-200 dark:bg-gray-700"></span>
        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></span>
          <h3 className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"></h3>
          <h2
            className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"
            style={{ width: "75%" }}
          ></h2>
          <ul className="flex flex-wrap  mt-2 gap-2">
            {Array(3)
              .fill()
              .map((_, i) => (
                <li
                  key={i}
                  className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"
                  style={{ width: "30%" }}
                ></li>
              ))}
          </ul>
          <p
            className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"
            style={{ width: "75%" }}
          ></p>
        </div>
        <div className="mt-auto p-4  flex justify-center items-center border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          <p
            className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"
            style={{ width: "50%" }}
          ></p>
        </div>
      </div>
    ));
}

export default CardSkeleton;
