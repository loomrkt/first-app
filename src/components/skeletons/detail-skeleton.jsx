function DetailSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="sm:flex items-stretch justify-center gap-x-10 block px-5 sm:px-10 mt-4">
        <div className="w-full sm:w-1/2  h-80 flex flex-col justify-center items-cente rounded-t-xl">
          <span className="w-full h-full block bg-gray-200 dark:bg-gray-700"></span>
        </div>
        <div className="w-full sm:w-1/2 m-2 sm:m-0">
          <h2
            className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"
            style={{ width: "50%" }}
          ></h2>
          <h2
            className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"
            style={{ width: "55%" }}
          ></h2>
          <ul className="flex flex-wrap  mt-2 gap-2 mb-3">
            {Array(3)
              .fill()
              .map((_, i) => (
                <li
                  key={i}
                  className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"
                  style={{ width: "calc(95%/4)" }}
                ></li>
              ))}
          </ul>
          <h2
            className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"
            style={{ width: "50%" }}
          ></h2>
          <h2
            className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"
            style={{ width: "55%" }}
          ></h2>
          <h2
            className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"
            style={{ width: "60%" }}
          ></h2>
          <h2
            className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"
            style={{ width: "55%" }}
          ></h2>
        </div>
      </div>
      <div className="px-5 sm:px-10 mt-5">
        <p className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"></p>
        <p className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"></p>
        <p
          className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-2"
          style={{ width: "55%" }}
        ></p>
      </div>
    </div>
  );
}

export default DetailSkeleton;
