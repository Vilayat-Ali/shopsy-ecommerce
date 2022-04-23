import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, openMenu] = useState<Boolean>(false);
  const [section, setSection] = useState<string>("home");
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 justify-center items-center">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <a className="flex items-center">
              <img
                src="/app/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Shopsy logo"
              />
            </a>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className="focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{ backgroundColor: "#22a47f", color: "#fff" }}
              onClick={() =>
                (window.location.href =
                  "https://github.com/Vilayat-Ali/shopsy-ecommerce")
              }
            >
              Visit Repo
            </button>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
              onClick={() => openMenu(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              isOpen
                ? "justify-between items-center w-full md:flex md:w-auto md:order-1"
                : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            }
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/">
                  <a
                    className="block py-2 pr-4 pl-3 text-white hover:text-logogreen rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white border-b md:border-0"
                    aria-current="page"
                    onClick={() => openMenu(!isOpen)}
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li>
                <Link to="/shop">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-logogreen border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => openMenu(!isOpen)}
                  >
                    Shop
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-logogreen border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => openMenu(!isOpen)}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => openMenu(!isOpen)}
                  >
                    <div className="flex flex-row md:justify-center items-center ">
                      <img src="https://img.icons8.com/windows/32/000000/favorite-cart.png" />
                      <span
                        className="px-2 py-1 text-sm text-white bg-logogreen rounded-full"
                        style={{ color: "#fff" }}
                      >
                        0
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/favorites">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => openMenu(!isOpen)}
                  >
                    <div className="flex flex-row md:justify-center items-center ">
                      <img src="https://img.icons8.com/cotton/32/000000/hearts--v8.png" />
                      <span
                        className="px-2 py-1 text-sm text-white bg-logogreen rounded-full"
                        style={{ color: "#fff" }}
                      >
                        0
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
