/* eslint-disable react/no-unescaped-entities */
import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
      <header className="mb-auto flex justify-center z-50 w-full py-4">
        <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
          <Link
            className="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
            to={"/"}
            aria-label="Brand"
          >
            ConsoleConnection
          </Link>
        </nav>
      </header>

      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
          {error.status}
        </h1>
        <h1 className="text-xl font-bold text-gray-800 sm:text-4xl dark:text-white">
          {error.statusText || error.message}
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Oops, something went wrong.
        </p>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <Link
            className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            to={"/"}
          >
            <svg
              className="w-4 h-4"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />{" "}
            </svg>
            back to home
          </Link>
        </div>
      </div>

      <footer className="mt-auto text-center py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">© All Rights Reserved. 2022.</p>
        </div>
      </footer>
    </div>
  );
}

export default ErrorPage;
