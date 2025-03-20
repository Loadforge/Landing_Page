import { Button } from "../ui/button";

export default function Home() {
  return (
    <div id="home" className="h-screen bg-home">
      <div className="h-screen bg-[url('/assets/background/background.svg')] bg-cover bg-center flex items-center  p-20">
        <div className="text-text w-full border flex flex-col gap-24">
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Effortless{" "}
              <span className="bg-gradient-to-r from-primary to-[#1F3FDC] bg-clip-text text-transparent">
                API Testing
              </span>
              <br />
              for Developers and Teams
            </h1>
            <p className="text-subtitle mt-4">
              Accelerate your development process with our powerful API testing
              platform. Designed for efficiency, LoadForge simplifies testing,
              debugging, and optimizing APIs, ensuring seamless integration and
              top performance.
            </p>
          </div>
          <button className="w-1/2 text-white text-2xl font-bold p-4 bg-gradient-to-b from-primary to-[#F0C52E] rounded-xl">Get Started</button>
        </div>

        <div className="w-full border"></div>
      </div>
    </div>
  );
}
