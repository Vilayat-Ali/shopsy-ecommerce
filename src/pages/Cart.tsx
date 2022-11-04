import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import CartProductCard from "../components/CartProductCard";

export default function Cart() {
  const [loading, setLoading] = useState<Boolean>(false);
  const cartItems: any[] = useSelector((state: any) => state.user.cart);
  useEffect(() => {
    setLoading(!loading);
  }, []);
  return (
    <>
      <div className={loading ? "" : "hidden"}>
        <div className="h-400 bg-green-200">
          <div className="py-12 xs:py-0">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl sm:mb-45">
              <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">
                  <div className="md:grid md:grid-cols-3 gap-2 ">
                    <div className="col-span-2 p-5">
                      <h1 className="text-xl font-medium ">Shopping Cart</h1>
                      <div
                        className="overflow-y-auto"
                        style={{ height: "45vh", marginTop: "2vh" }}
                      >
                        {cartItems.map((product: any, index: number) => {
                          return (
                            <CartProductCard
                              key={index}
                              productName={product.title}
                              productImage={product.image}
                              productID="220"
                              quantity={1}
                              productPrice={1150}
                            />
                          );
                        })}
                      </div>
                      <div className="flex justify-between items-center mt-6 pt-6 border-t">
                        <Link to="/shop">
                          <div className="flex items-center">
                            {" "}
                            <img src="https://img.icons8.com/material-sharp/24/000000/chevron-left.png" />
                            <span className="text-md font-medium text-logogreen">
                              Continue Shopping
                            </span>{" "}
                          </div>
                        </Link>
                        <div className="flex justify-center items-end">
                          {" "}
                          <span className="text-sm font-medium text-gray-600 mr-1">
                            Subtotal:
                          </span>{" "}
                          <span className="text-lg font-bold text-gray-600">
                            {" "}
                            ${(714.212).toFixed(2)}
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-logogreen rounded overflow-visible">
                      {" "}
                      <span className="text-xl font-medium text-gray-100 block pb-3">
                        Card Details
                      </span>{" "}
                      <span className="text-xs text-white">Card Type</span>
                      <div className="overflow-visible flex justify-between items-center mt-2">
                        <div className="rounded w-52 h-28 bg-gray-900 py-2 px-4 relative right-10">
                          {" "}
                          <span className="italic text-lg font-medium text-white underline">
                            VISA
                          </span>
                          <div className="flex justify-between items-center pt-4 ">
                            {" "}
                            <span className="text-xs text-white font-medium">
                              ****
                            </span>{" "}
                            <span className="text-xs text-white font-medium">
                              ****
                            </span>{" "}
                            <span className="text-xs text-white font-medium">
                              ****
                            </span>{" "}
                            <span className="text-xs text-white font-medium">
                              ****
                            </span>{" "}
                          </div>
                          <div className="flex justify-between items-center mt-3">
                            {" "}
                            <span className="text-xs text-white">
                              Mr. Customer
                            </span>{" "}
                            <span className="text-xs text-white">12/18</span>{" "}
                          </div>
                        </div>
                        <div className="flex justify-center items-center flex-col">
                          {" "}
                          <img
                            src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                            width="40"
                            className="relative right-5"
                          />{" "}
                          <span className="text-xs font-medium text-white bottom-2 relative right-5">
                            mastercard.
                          </span>{" "}
                        </div>
                      </div>
                      <div className="flex justify-center flex-col pt-3">
                        {" "}
                        <label className="text-xs text-white ">
                          Name on Card
                        </label>{" "}
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 px-2"
                          placeholder="Mr. Customer"
                        />{" "}
                      </div>
                      <div className="flex justify-center flex-col pt-3">
                        {" "}
                        <label className="text-xs text-white ">
                          Card Number
                        </label>{" "}
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 px-2"
                          placeholder="**** **** **** ****"
                        />{" "}
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                        <div className="col-span-2 ">
                          {" "}
                          <label className="text-xs text-white">
                            Expiration Date
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {" "}
                            <input
                              type="text"
                              className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 px-2"
                              placeholder="mm"
                            />{" "}
                            <input
                              type="text"
                              className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 px-2"
                              placeholder="yyyy"
                            />{" "}
                          </div>
                        </div>
                        <div className="">
                          {" "}
                          <label className="text-xs text-white">CVV</label>{" "}
                          <input
                            type="text"
                            className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 px-2"
                            placeholder="XXX"
                          />{" "}
                        </div>
                      </div>{" "}
                      <button className="h-12 w-full bg-green-500 rounded focus:outline-none text-white hover:bg-green-600">
                        Check Out
                      </button>
                    </div>
                  </div>
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
