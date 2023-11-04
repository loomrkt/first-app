/* eslint-disable react/no-unescaped-entities */
function AproposPage() {
  return (
    <div>
      {/* <!-- Clients --> */}
      <div className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="sm:w-10/12 mx-auto text-center mb-6">
          <h2 className="text-xl mb-2 font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
            Projet d’application web de partage de jeux en ligne
          </h2>
          <p className="text-gray-500 dark:text-gray-400 ">
            Cette projet est une plateforme de partage de jeux en ligne qui vise
            à réunir les amateurs de jeux du monde entier. Cette application web
            offre une interface conviviale où les utilisateurs peuvent
            découvrir, partager et discuter de leurs jeux préférés.
          </p>
        </div>
        <div className="sm:w-10/12 mx-auto text-center mb-6">
          <h2 className="text-xl mb-2 font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
            Voici Technologie utilisée
          </h2>
          <p className="text-gray-500 dark:text-gray-400 ">
            Pour offrir une expérience utilisateur optimale à ma connaissance ,
            j'ai utilisée une combinaison de technologies de pointe pour le
            développement de notre application web.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
          <a
            className="flex-shrink-0 transition hover:-translate-y-1"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 md:w-10 md:h-10 mx-auto sm:mx-0"
              width="48"
              height="55"
              viewBox="0 0 48 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 27.3522C48 24.1724 44.0179 21.159 37.9128 19.2902C39.3216 13.0677 38.6955 8.11699 35.9364 6.53199C35.3004 6.1602 34.5569 5.98409 33.7448 5.98409V8.16591C34.1949 8.16591 34.5569 8.25396 34.8602 8.42029C36.1908 9.18344 36.768 12.0893 36.318 15.8267C36.2104 16.7464 36.0342 17.715 35.819 18.7032C33.9013 18.2336 31.8076 17.8716 29.6062 17.6368C28.2854 15.8267 26.9156 14.183 25.5361 12.7448C28.7256 9.78026 31.7195 8.15612 33.7546 8.15612V5.9743C31.064 5.9743 27.5418 7.89196 23.9804 11.2185C20.4191 7.91152 16.8969 6.01344 14.2063 6.01344V8.19526C16.2316 8.19526 19.2352 9.80961 22.4248 12.7546C21.055 14.1928 19.6853 15.8267 18.384 17.6368C16.1729 17.8716 14.0791 18.2336 12.1614 18.713C11.9364 17.7346 11.7701 16.7856 11.6527 15.8756C11.1928 12.1382 11.7603 9.23236 13.0811 8.45942C13.3746 8.28331 13.7562 8.20504 14.2063 8.20504V6.02322C13.3844 6.02322 12.6408 6.19933 11.9951 6.57112C9.24582 8.15612 8.62943 13.097 10.0481 19.3C3.96249 21.1785 0 24.1822 0 27.3522C0 30.532 3.98206 33.5454 10.0872 35.4142C8.67835 41.6368 9.30453 46.5874 12.0636 48.1724C12.6996 48.5442 13.4431 48.7203 14.265 48.7203C16.9556 48.7203 20.4778 46.8027 24.0391 43.4761C27.6005 46.7831 31.1227 48.6812 33.8133 48.6812C34.6351 48.6812 35.3787 48.5051 36.0245 48.1333C38.7737 46.5483 39.3901 41.6074 37.9715 35.4044C44.0375 33.5357 48 30.5222 48 27.3522V27.3522ZM35.2613 20.8263C34.8993 22.0884 34.4492 23.3897 33.9405 24.691C33.5393 23.9083 33.1186 23.1255 32.6588 22.3428C32.2087 21.5601 31.7293 20.797 31.2499 20.0534C32.6392 20.2589 33.9796 20.5132 35.2613 20.8263ZM30.7803 31.2462C30.0171 32.567 29.2344 33.8194 28.4223 34.9837C26.9645 35.1109 25.4872 35.1794 24 35.1794C22.5226 35.1794 21.0453 35.1109 19.5972 34.9935C18.7852 33.8292 17.9927 32.5866 17.2295 31.2756C16.4859 29.9939 15.8108 28.6926 15.1945 27.3816C15.8011 26.0705 16.4859 24.7595 17.2197 23.4778C17.9829 22.1569 18.7656 20.9046 19.5777 19.7403C21.0355 19.6131 22.5128 19.5446 24 19.5446C25.4774 19.5446 26.9547 19.6131 28.4028 19.7305C29.2148 20.8948 30.0073 22.1374 30.7705 23.4484C31.5141 24.7301 32.1892 26.0314 32.8055 27.3424C32.1892 28.6535 31.5141 29.9645 30.7803 31.2462ZM33.9405 29.9743C34.4688 31.2854 34.9189 32.5964 35.2907 33.8683C34.009 34.1814 32.6588 34.4456 31.2597 34.651C31.7391 33.8977 32.2185 33.1247 32.6686 32.3322C33.1186 31.5495 33.5393 30.757 33.9405 29.9743ZM24.0196 40.4138C23.1097 39.4745 22.1998 38.4276 21.2996 37.2829C22.1802 37.322 23.0803 37.3514 23.9902 37.3514C24.9099 37.3514 25.8198 37.3318 26.7102 37.2829C25.8296 38.4276 24.9197 39.4745 24.0196 40.4138ZM16.7403 34.651C15.351 34.4456 14.0106 34.1912 12.7289 33.8781C13.0909 32.616 13.541 31.3147 14.0497 30.0134C14.4509 30.7962 14.8716 31.5789 15.3314 32.3616C15.7913 33.1443 16.2609 33.9074 16.7403 34.651ZM23.9707 14.2907C24.8806 15.2299 25.7905 16.2768 26.6906 17.4215C25.81 17.3824 24.9099 17.353 24 17.353C23.0803 17.353 22.1704 17.3726 21.2801 17.4215C22.1606 16.2768 23.0705 15.2299 23.9707 14.2907ZM16.7305 20.0534C16.2511 20.8068 15.7717 21.5797 15.3216 22.3722C14.8716 23.1549 14.4509 23.9376 14.0497 24.7203C13.5214 23.4093 13.0713 22.0982 12.6996 20.8263C13.9812 20.523 15.3314 20.2589 16.7305 20.0534V20.0534ZM7.87607 32.3029C4.41256 30.8255 2.17203 28.8883 2.17203 27.3522C2.17203 25.8161 4.41256 23.8691 7.87607 22.4015C8.71749 22.0395 9.63718 21.7167 10.5862 21.4134C11.1439 23.331 11.8777 25.3269 12.7876 27.3718C11.8875 29.4068 11.1635 31.393 10.6156 33.3008C9.64696 32.9975 8.72727 32.6649 7.87607 32.3029ZM13.1398 46.2841C11.8092 45.521 11.232 42.6152 11.682 38.8777C11.7896 37.958 11.9658 36.9894 12.181 36.0012C14.0987 36.4708 16.1924 36.8328 18.3938 37.0677C19.7146 38.8777 21.0844 40.5214 22.4639 41.9596C19.2744 44.9242 16.2805 46.5483 14.2454 46.5483C13.8051 46.5385 13.4333 46.4505 13.1398 46.2841V46.2841ZM36.3473 38.8288C36.8072 42.5662 36.2397 45.4721 34.9189 46.245C34.6254 46.4211 34.2438 46.4994 33.7937 46.4994C31.7684 46.4994 28.7648 44.885 25.5752 41.9401C26.945 40.5018 28.3147 38.8679 29.616 37.0579C31.8272 36.8231 33.9209 36.4611 35.8386 35.9816C36.0636 36.9698 36.2397 37.9189 36.3473 38.8288V38.8288ZM40.1141 32.3029C39.2727 32.6649 38.353 32.9878 37.404 33.2911C36.8463 31.3734 36.1125 29.3775 35.2026 27.3326C36.1027 25.2976 36.8267 23.3114 37.3746 21.4036C38.3433 21.7069 39.2629 22.0395 40.1239 22.4015C43.5874 23.8789 45.828 25.8161 45.828 27.3522C45.8182 28.8883 43.5777 30.8353 40.1141 32.3029V32.3029Z"
                fill="#61DAFB"
              />
              <path
                d="M23.9898 31.8234C26.4592 31.8234 28.4611 29.8216 28.4611 27.3522C28.4611 24.8828 26.4592 22.8809 23.9898 22.8809C21.5204 22.8809 19.5186 24.8828 19.5186 27.3522C19.5186 29.8216 21.5204 31.8234 23.9898 31.8234Z"
                fill="#61DAFB"
              />
            </svg>
          </a>

          <a
            className="flex-shrink-0 transition hover:-translate-y-1"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-10 md:h-10 mx-auto sm:mx-0"
              viewBox="0 0 64 64"
            >
              <defs>
                <linearGradient
                  x1="0"
                  y1="-21.333"
                  y2="85.333"
                  id="A"
                  x2="64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2383ae" offset="0%" />
                  <stop stopColor="#6dd7b9" offset="100%" />
                </linearGradient>
              </defs>
              <path
                d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                fill="url(#A)"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <a
            className="flex-shrink-0 transition hover:-translate-y-1"
            href="https://preline.co/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-10 md:h-10 mx-auto sm:mx-0"
              viewBox="0 0 32 32"
            >
              <path
                d="M1 28.9786V15.9786C1 9.35116 6.37258 3.97858 13 3.97858C19.6274 3.97858 25 9.35116 25 15.9786C25 22.606 19.6274 27.9786 13 27.9786H12"
                className="stroke-blue-600 dark:stroke-white"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              ></path>
              <path
                d="M5 28.9786V16.1386C5 11.6319 8.58172 7.97858 13 7.97858C17.4183 7.97858 21 11.6319 21 16.1386C21 20.6452 17.4183 24.2986 13 24.2986H12"
                className="stroke-blue-600 dark:stroke-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <circle
                cx="13"
                cy="16"
                r="5"
                fill="currentColor"
                className="fill-blue-600 dark:fill-white"
              ></circle>
            </svg>
          </a>

          <a
            className="flex-shrink-0 transition hover:-translate-y-1"
            href="https://rawg.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6 md:w-10 md:h-10 mx-auto sm:mx-0"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAxMTFDQ0MPDw+0tLT////z8/PGxsZpaWmenp6Dg4OVlZXZ2dlXV1fR0dEnJyfNbzErAAAABnRSTlMAQb7/va4oBSU2AAAAkUlEQVR4AX3TRQKEMAADQJy6//+raFZJmwsydemO9MP4yNR3V+aRZq4atB+r6buhjkOHl2W9s4gvfaFUiDYrR8Qy1EeuygtBN47Cnxwo4sXU0FFEa/EsRdB4H05TiSCCigzROmnWoVE+oIyx0qlYVKV4Vc0cUdVSRNX4jdjscr6U9YgATmM1U/OAtY8mlFrzOuzFCQ8SOjTUoQAAAABJRU5ErkJggg=="
              alt=""
              data-atf="1"
              data-frt="0"
            />
          </a>
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Clients --> */}
    </div>
  );
}

export default AproposPage;
