export default function ShopNav(props: any) {
  return (
    <nav className="w-full bg-logogreen">
      <ul className="flex flex-row justify-end items-center pt-2.5">
        <li className="px-2">
          <div className="flex justify-center">
            <div className="mb-3 xl:w-25">
              <select
                className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={(e: any) => {
                  if (e.target.value !== "") {
                    props.categoryStateManager(e.target.value);
                  }
                  props.loading(false);
                }}
              >
                <option selected value="">
                  Select Category
                </option>
                <option value="smartphones">smartphones</option>
                <option value="laptops">laptops</option>
                <option value="fragrances">fragrances</option>
                <option value="skincare">skincare</option>
                <option value="groceries">groceries</option>
                <option value="home-decoration">home-decoration</option>
                <option value="furniture">furniture</option>
                <option value="tops">tops</option>
                <option value="womens-dresses">womens-dresses</option>
                <option value="womens-shoes">laptops</option>
                <option value="mens-shirts">mens-shirts</option>
                <option value="mens-shoes">mens-shoes</option>
                <option value="mens-watches">mens-watches</option>
                <option value="womens-watches">womens-watches</option>
                <option value="womens-bags">womens-bags</option>
                <option value="womens-jewellery">womens-jewellery</option>
                <option value="sunglasses">sunglasses</option>
                <option value="automotive">automotive</option>
                <option value="motorcycle">motorcycle</option>
                <option value="lighting">lighting</option>
              </select>
            </div>
          </div>
        </li>
        <li className="mx-1">
          <div className="flex justify-center">
            <div className="mb-3 xl:w-25">
              <select
                className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={(e: any) => {
                  props.sortStateManager(e.target.value);
                  props.loading(false);
                }}
              >
                <option selected>Sort By Price</option>
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
