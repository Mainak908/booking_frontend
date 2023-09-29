export const Navbar = () => {
  return (
    <div className=" h-16 bg-blue-700 flex justify-center">
      <div className=" w-full max-w-screen-xl text-white flex justify-between items-center px-5">
        <span className=" font-bold text-xl md:text-2xl">NexTrip</span>
        <div className="">
          <button className=" bg-white text-blue-700 py-1 px-4 rounded-lg text-sm md:text-base font-semibold ml-2 md:ml-4">
            Register
          </button>
          <button className=" bg-white text-blue-700 py-1 px-4 rounded-lg text-sm md:text-base font-semibold ml-2 md:ml-4">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
