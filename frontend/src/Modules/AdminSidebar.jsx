import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="bg-[#071b52] h-full w-full">
      <div className="flex flex-col items-center justify-start w-full h-full py-5 gap-y-10 px-7">
        <div className="flex w-full">
          <h1 className="text-2xl font-bold text-white">Logo</h1>
        </div>
        <div className="flex flex-col w-full gap-y-4">
          <Link to="" className="w-full">
            <p className="w-full p-3 text-white transition-all duration-300 ease-in-out rounded-md font-radios hover:text-blue-500 bg-slate-500">
              Sales
            </p>
          </Link>
          <Link to="" className="w-full">
            <p className="w-full p-3 text-white transition-all duration-300 ease-in-out rounded-md font-radios hover:text-blue-500">
              Users
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
