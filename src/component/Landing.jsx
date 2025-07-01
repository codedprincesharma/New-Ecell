const Landing = () => {
  return (
    <div className="w-full min-h-full flex flex-col px-4 md:px-10 py-10 mt-10 md:mt-5 gap-20">
      <div className="flex flex-col items-center max-w-6xl w-full mx-auto gap-6 mt-6 text-center">
        <h1 className="text-5xl sm:text-4xl md:text-5xl font-[Orbitron] lg:text-6xl font-bold leading-none">
          Innovation <span className=" text-blue-500">Starts</span> with you.{" "}
          <span className="">We’re</span> here to{" "}
          <span className=" capitalize font-bold text-blue-500">accelerate</span> it.
        </h1>
      </div>
    </div>
  );
};

export default Landing;