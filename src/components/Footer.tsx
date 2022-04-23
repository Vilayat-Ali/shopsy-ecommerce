import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src="/app/logo.png" className="mr-3 h-8" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about">
                <a className="mr-4 hover:text-logogreen md:mr-6 ">About</a>
              </Link>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-logogreen md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-logogreen md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <Link to="/about">
                <a className="hover:text-logogreen">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-logogreen lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link to="/">
            <a className="hover:text-logogreen">Shopsy™</a>
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
