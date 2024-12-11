export default function NavbarPage() {
  return (
    <header>
      <nav>
        <div className="flex justify-between px-6 bg-gray-300 items-center py-4">
          <div className="flex space-x-4 items-center">
            <h1 className="text-black font-bold text-xl tracking-wide cursor-pointer">
              Soporte
            </h1>
          </div>
          <ul className="flex space-x-6">
            <li className="text-white text-lg font-semibold tracking-normal cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C6.67 6.165 6 7.388 6 9v5.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </li>
            <li className="text-white text-lg font-semibold tracking-normal cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15.75h7.5m-7.5-3h7.5m-7.5-3h7.5M3 8.25h18M6.75 3v3m10.5-3v3M4.5 21h15a2.25 2.25 0 002.25-2.25v-12A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v12A2.25 2.25 0 004.5 21z"
                />
              </svg>
            </li>
            <li className="text-white text-lg font-semibold tracking-normal cursor-pointer">
              <svg
                aria-hidden="true"
                role="img"
                className="h-6 w-6 text-white"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
