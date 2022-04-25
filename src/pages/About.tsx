import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function About() {
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    setLoading(!loading);
  }, []);
  return (
    <>
      <Helmet>
        <title>Shopsy | About</title>
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
        <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden w-100 p-10">
          <div className="container">
            <div className="flex flex-wrap justify-between items-center -mx-4">
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full xl:w-1/2 px-3 sm:px-4">
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="pic-1"
                        className="rounded-2xl w-full"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="pic-2"
                        className="rounded-2xl w-full"
                      />
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2 px-3 sm:px-4">
                    <div className="my-4 relative z-10">
                      <img
                        src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="pic-3"
                        className="rounded-2xl w-full"
                      />
                      <span className="absolute -right-7 -bottom-7 z-[-1]">
                        <svg
                          width="134"
                          height="106"
                          viewBox="0 0 134 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="1.66667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="31"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3334"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 60.3334 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="103"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="132"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="31"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="103"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="132"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="31"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="31"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 60.3333 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 88.6667 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 117.667 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 74.6667 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="103"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="103"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 103 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="132"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="132"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 132 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="31"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="31"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 31 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="103"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="103"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 103 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="132"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="132"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 132 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="31"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 31 45.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="31"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="103"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="103"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 103 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="132"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="132"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 132 1.66683)"
                            fill="#3056D3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="-mt-2 lg:mt-0">
                  <span className="font-semibold text-lg text-gray-700 mb-2 block">
                    Meet the team that makes{" "}
                    <span className="text-logogreen">Shopsy</span>
                  </span>
                  <h2 className="font-bold text-3xl sm:text-4xl text-dark mb-8">
                    Shopsy Enployee Page
                  </h2>
                  <p className="text-base text-body-color mb-8">
                    Shopsy's employee are dedicated and hard-working individuals
                    who work ever harder to catch with your demands and needs.
                    Every idea shared and every opportunity seized by you helped
                    us achieve the heights. Kudos to your efforts! An employee’s
                    hard work is the fuel to great company culture. Thanks for
                    adding extra miles to ours. It’s your dedication that
                    contributed to our success. Thank you for inspiring us!
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href =
                        "https://www.github.com/Vilayat-Ali")
                    }
                    className="bg-logogreen hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                  >
                    Meet the Dev
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
