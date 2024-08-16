import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" bg-[#071b52] h-full">
      <div className="flex flex-col items-center justify-center w-full py-5 gap-y-10 px-7">
        <div className="flex w-full ">
          <h1 className="text-2xl font-bold text-white">Logo</h1>
        </div>
        <Link to="" className="w-full ">
          <p className="w-full p-3 text-white transition-all duration-300 ease-in-out rounded-md font-radios hover:text-blue-500 bg-slate-500">
            Sales
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
