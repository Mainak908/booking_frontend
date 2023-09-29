export const Mail = () => {
  return (
    <div className="w-full mt-12 bg-blue-800 text-white flex flex-col items-center justify-center gap-5 p-12">
      <h1 className="">Save time, Save money !</h1>
      <span className="">Sign up and we'll send the best deals to you</span>
      <div className="w-72 h-10 p-2  mr-2 lg:flex gap-2">
        <input
          className=" text-center rounded-lg"
          type="email"
          placeholder="Your Email"
        />
        <button className=" flex items-center justify-center bg-blue-500 text-white font-medium rounded-md cursor-pointer p-2">
          Subscribe
        </button>
      </div>
    </div>
  );
};
