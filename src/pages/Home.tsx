import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    setLoading(!loading);
  }, []);
  return (
    <>
      <Helmet>
        <title>Shopsy | Home</title>
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
        <h1>Home</h1>
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
