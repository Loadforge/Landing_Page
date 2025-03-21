import ThreeScene from "../bigorn_3D/ThreeScene";

export default function Home() {
  return (
    <div id="home" className="h-screen bg-home">
      <div className="h-screen bg-[url('/assets/background/background.svg')] bg-cover bg-center flex items-center justify-between p-20">
        <div className="text-text w-6/10 flex flex-col gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Effortless{" "}
              <span className="bg-clip-text text-transparent animate-gradient">
                API Testing
              </span>
              <br />
              for Developers and Teams
            </h1>
            <p className="text-subtitle mt-4 max-w-xl">
              Accelerate your development process with our powerful API testing
              platform. Designed for efficiency, LoadForge simplifies testing,
              debugging, and optimizing APIs, ensuring seamless integration and
              top performance.
            </p>
          </div>
          <button className="w-1/3 text-white text-2xl font-bold p-4 rounded-xl bg-gradient-to-b from-primary to-[#F0C52E] transition-all duration-500 ease-in-out hover:shadow-lg hover:animate-gradient">
            Get Started
          </button>
        </div>

        <div className="w-4/10 flex justify-center mt-32">
          <ThreeScene />
        </div>
      </div>
    </div>
  );
}
