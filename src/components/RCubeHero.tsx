import logo from "../assets/R Cube Digital Studio logo.png"; // Adjust the path as necessary

const RCubeHero = () => {
  return (
    <section className="bg-white pt-32 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-left mb-10 md:mb-0 md:w-1/2">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            R Cube Digital Studio
          </h1>
          <p className="text-xl text-gray-700">
            Where we build apps that solve real problems.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-full flex justify-center">
          <img
            src={logo} // Place your logo in `public/logo.png`
            alt="R Cube Logo"
            width={200}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default RCubeHero;
