import { ExternalService } from "@/services";
import ThreeScene from "../bigorn_3D/ThreeScene";
import { useTranslation } from "react-i18next";

const handleRedirect = () => {
  ExternalService.redirectToExternal();
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <div id="home" className="h-screen relative">
      <div className="absolute inset-0 -z-10 bg-home">
        <img
          src="./background.svg"
          alt="Background"
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>

      <div className="h-screen flex items-center justify-between p-20 relative">
        <div className="text-text w-3/5 flex flex-col gap-10">
          <div>
            <h1 className="text-5xl font-bold leading-tight ">
              {t("home.title.before")}
              <span className="bg-clip-text text-transparent animate-gradient p-2">
                {t("home.title.highlight")}
              </span>
              <br />
              {t("home.title.after")}
            </h1>
            <p className="text-subtitle mt-4 max-w-xl text-text">
              {t("home.description")}
            </p>
          </div>
          <button
            onClick={handleRedirect}
            className="w-2/6 text-white text-2xl font-bold p-4 rounded-xl bg-gradient-to-b from-primary to-[#F0C52E] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg animate-gradient"
          >
            {t("home.button")}
          </button>
        </div>

        <div className="w-2/5 flex justify-center mt-32">
          <ThreeScene />
        </div>
      </div>
    </div>
  );
}
