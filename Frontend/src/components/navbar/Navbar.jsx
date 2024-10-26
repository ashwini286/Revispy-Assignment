import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { MdChevronLeft, MdKeyboardArrowRight } from "react-icons/md";
function Navbar() {
  return (
    <header className="border-b">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">ECOMMERCE</div>

        <nav className="space-x-6">
          <a href="/" className="hover:underline">
            Categories
          </a>
          <a href="/" className="hover:underline">
            Sale
          </a>
          <a href="/" className="hover:underline">
            Clearance
          </a>
          <a href="/" className="hover:underline">
            New stock
          </a>
          <a href="/" className="hover:underline">
            Trending
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <a href="/" className="text-sm hover:underline">
            Help
          </a>
          <a href="/" className="text-sm hover:underline">
            Orders & Returns
          </a>

          <AiOutlineSearch className="text-2xl cursor-pointer" />

          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />

          <div className="bg-green-500 text-white px-4 py-1 rounded-full">
            Suneel F M
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-2 px-6 text-sm flex justify-center items-center flex-row gap-4">
        <div className>
          <MdChevronLeft />
        </div>
        <div>Get 10% off on business sign up</div>
        <div>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
