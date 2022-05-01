import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { category, productID } = useParams();
  const [product, setProduct] = useState<any>({});
  const [images, setImages] = useState<[string]>([""]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/products/${productID}`)
      .then((product) => {
        setProduct(product.data);
        setImages(product.data.images);
        setLoading(!loading);
      })
      .catch((err: any) => {
        alert(err.message);
      });
  }, []);
  return (
    <>
      <div className={loading ? "" : "hidden"}>
        <div className="bg-logogreen text-white md:text-center py-2 px-4">
          If you like the project considering giving a star to{" "}
          <a
            href="https://github.com/Vilayat-Ali/shopsy-ecommerce"
            className="font-bold underline hover:text-indigo-100"
          >
            Shopsy Github repo
          </a>
          . See more works at{" "}
          <a
            href="https://www.github.com/Vilayat-Ali"
            className="font-bold underline hover:text-indigo-100"
          >
            official github account
          </a>
          .
        </div>

        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Link to="/shop">
                <a className="hover:underline hover:text-gray-600">Shop</a>
              </Link>
              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <a className="hover:underline hover:text-gray-600">{category}</a>
              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>productID-PID0{productID}</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 my-4">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div x-data="{ image: 1 }" x-cloak>
                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <img
                        src={product.thumbnail}
                        className="h-64 md:h-80 object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex -mx-2 mb-4">
                    <template x-for="i in 1">
                      <div className="flex-1 px-2">
                        <button className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                          <span x-text="i" className="text-2xl"></span>
                        </button>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  {product.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" className="text-logogreen hover:underline">
                    {product.brand}
                  </a>
                </p>

                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span className="text-green-500 mr-1 mt-1">$</span>
                      <span className="font-bold text-green-500 text-3xl">
                        {(
                          product.price -
                          (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-logogreen text-xl font-semibold">
                      Save {product.discountPercentage}%
                    </p>
                    <p className="text-gray-400 text-sm">
                      Inclusive of all Taxes.
                    </p>
                  </div>
                </div>

                <p className="text-gray-500">{product.description}</p>

                <div className="flex py-4 space-x-4">
                  <div className="relative">
                    <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                      Qty
                    </div>
                    <select
                      onChange={(e: any) => setQuantity(e.target.value)}
                      className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-logogreen hover:bg-green-500 text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={loading ? "hidden" : "h-500"}>
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "90vh" }}
        >
          <div className="flex">
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce200"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full animate-bounce400"></div>
          </div>
          <h1 className="text-2xl">Loading...</h1>
        </div>
      </div>
    </>
  );
}
