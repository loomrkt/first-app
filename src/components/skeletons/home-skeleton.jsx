function HomeSkeleton() {
  return (
    <div className="mt-7 animate-pulse">
      <div className="flex flex-col items-center mx-5">
        <h2 className="h-7 px-2 w-full sm:w-2/4 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"></h2>
        <h2 className="h-3 w-full sm:w-2/4 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"></h2>
        <h2 className="h-3 w-full sm:w-2/4 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"></h2>
        <h2 className="h-3 w-full sm:w-2/4 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"></h2>
        <div className="w-full sm:w-10/12  h-80 flex flex-col justify-center items-cente rounded-xl my-10">
          <span className="w-full h-full block bg-gray-200 dark:bg-gray-700 rounded-xl"></span>
        </div>
        <h2
          className="h-5 mt-5 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"
          style={{ width: "75%" }}
        ></h2>
      </div>
    </div>
  );
}

export default HomeSkeleton;
