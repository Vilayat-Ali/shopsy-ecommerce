import React, { useState, useEffect } from "react";
import axios from "axios";

// importing components
import ShopNav from "../components/ShopNav";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function Shop() {
  const limit: number = 8;
  const [productList, setProductList] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [start, setStart] = useState<number>(page * limit + 1);
  useEffect(() => {
    axios
      .get(
        category !== ""
          ? `https://dummyjson.com/products/category/${category}`
          : `https://dummyjson.com/products`
      )
      .then((res) => {
        setProductList(res.data.products.splice(start, limit + start - 1));
      })
      .catch((err: any) => {
        alert(err.message);
      });
  }, [start, category]);
  return (
    <>
      <ShopNav categoryStateManager={setCategory} sortStateManager={setSort} />
      <div className="flex justify-center my-2 py-5 -mb-4">
        <div className="mb-3 w-2/3">
          <div className="input-group relative flex flex-row items-stretch w-full mb-4 rounded">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search for product"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={(e: any) => {
                e.preventDefault();
                setSearchText(e.target.value);
              }}
            />
            <span
              className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {productList
          .filter((product: any) => {
            if (searchText === "") return product;
            if (searchText !== "" && sort === "") {
              if (
                product.title.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return product;
              }
            }
          })
          .map((product: any, index: any) => {
            return (
              <>
                <ProductCard
                  image={product.images[0]}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                />
              </>
            );
          })}
      </div>
      <Pagination incr={setStart} pointer={setPage} point={page} />
    </>
  );
}
