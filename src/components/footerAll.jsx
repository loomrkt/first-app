function FooterAll() {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* <!-- Grid --> */}
      <div className="text-center">
        <div>
          <a
            className="flex-none text-xl font-semibold text-black dark:text-white"
            href="#"
            aria-label="Brand"
          >
            ConsoleConnection
          </a>
        </div>
        {/* <!-- End Col --> */}

        <div className="mt-3">
          <p className="text-gray-500">
            Tous droits réservés - © 2023 ConsoleConnection par RAKOTONDRAZAKA
            Nameno F.
          </p>
        </div>

        {/* <!-- Social Brands --> */}
        <div className="mt-3 space-x-1  ">
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            href="https://github.com/loomrkt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            href="https://www.facebook.com/nameno.rkt.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20px"
              height="20px"
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2aa4f4" />
                <stop offset="1" stopColor="#007ad9" />
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              />
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              />
            </svg>
          </a>
        </div>
        {/* <!-- End Social Brands --> */}
      </div>
      {/* <!-- End Grid --> */}
    </footer>
  );
}

export default FooterAll;
