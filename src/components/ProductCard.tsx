import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface productCardPropType {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
}

export default function ProductCard({
  id,
  image,
  title,
  price,
  discountPercentage,
}: productCardPropType) {
  const [isFav, setFav] = useState<Boolean>(false);
  return (
    <div className="w-full md:w-400 p-2 my-2">
      <div className="bg-white shadow-lg hover:shadow-xl rounded-lg ">
        <div
          className="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="text-right" onClick={() => setFav(!isFav)}>
            <button
              className="text-pink-600 hover:text-pink-600 p-2 rounded-full"
              style={{ background: "rgba(34, 164, 127, 0.3)" }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill={isFav ? "#22a47f" : "#fff"}
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-start px-2 pt-2">
          <div className="p-2 flex-grow">
            <h1 className="font-medium text-xl font-poppins">
              {title.substring(0, 25)}
            </h1>
          </div>
          <div className="p-2 text-right">
            <div className="text-logogreen font-semibold text-lg font-poppins">
              ${(price - (discountPercentage * price) / 100).toFixed(2)}
            </div>
            <div className="text-md text-gray-500 line-through font-poppins">
              ${price}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-2 pb-2">
          <div className="w-1/2 p-2">
            <Link to={`/shop/category/${id}`}>
              <button
                className="block w-full bg-logogreen hover:bg-teal-600 border-2 border-logogreen hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                style={{ color: "#fff" }}
              >
                <svg viewBox="0 0 24 24" className="inline w-4 h-4">
                  <path
                    fill="currentColor"
                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                  />
                </svg>{" "}
                Details
              </button>
            </Link>
          </div>
          <div className="w-1/2">
            <button className="block w-full bg-white hover:bg-gray-100 text-logogreen border-2 border-logogreen px-3 py-2 rounded uppercase font-poppins font-medium">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
