import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import axios from "axios";

// importing components
import ShopNav from "../components/ShopNav";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [productList, setProductList] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    axios
      .get(
        category !== ""
          ? `${process.env.REACT_APP_API_BASE_URL}/products/category/${category}`
          : `${process.env.REACT_APP_API_BASE_URL}/products`
      )
      .then((res) => {
        setProductList(res.data.products.splice(0, 8));
        setLoading(!loading);
      })
      .catch((err: any) => {
        alert(err.message);
      });
  }, [category, sort]);
  return (
    <>
      <Helmet>
        <title>Shopsy | Shop</title>
        <meta
          name="description"
          content="Shopsy presents over 1000+ products from popular brands at the never-seen-before price range with 20-days money back guarantee and cash on delivery!"
        />
        <meta
          name="keywords"
          content="smartphones,
    laptops,
    fragrances,
    skincare,
    groceries,
    home-decoration,
    furniture,
    tops,
    womens-dresses,
    womens-shoes,
    mens-shirts,
    mens-shoes,
    mens-watches,
    womens-watches,
    womens-bags,
    womens-jewellery,
    sunglasses,
    automotive,
    motorcycle,
    lighting, shopping, eCommerce"
        />
      </Helmet>
      <div className={loading ? "" : "hidden"}>
        <ShopNav
          categoryStateManager={setCategory}
          sortStateManager={setSort}
          loading={setLoading}
        />
        <div className="flex justify-center items-center my-2 py-5 -mb-8">
          <div className="mb-3 w-2/3 mx-auto">
            <div className="input-group relative flex flex-row items-stretch w-full mb-2 rounded">
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
                    fill="#22a47f"
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
            .map((product: any) => {
              return (
                <>
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.thumbnail}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                  />
                </>
              );
            })}
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
          <h1 className="text-2xl text-gray-600">
            Please wait... Fetching products...
          </h1>
        </div>
      </div>
    </>
  );
}
