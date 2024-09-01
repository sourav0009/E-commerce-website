import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className=" container hidden lg:block">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Logo</span>
          <div className=" relative w-full max-w-[500px]">
            <input className=" bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Product..." />
            <FaSearch className=" absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20}/>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
