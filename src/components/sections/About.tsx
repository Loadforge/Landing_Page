import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiRust, SiAxios } from "react-icons/si";

export default function About() {
  const { t } = useTranslation();

  const techIcons = [
    <FaReact key="react" className="text-sky-400 w-12 h-12" />,
    <SiNextdotjs key="next" className="text-black dark:text-white w-12 h-12" />,
    <FaNodeJs key="node" className="text-green-500 w-12 h-12" />,
    <SiRust key="rust" className="text-orange-600 w-12 h-12" />,
    <FaDocker key="docker" className="text-blue-500 w-12 h-12" />,
    <SiAxios key="axios" className="text-purple-500 w-12 h-12" />,
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-16 bg-[var(--background)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto">
        <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
          {t("aboutSection.p1")}
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          {t("aboutSection.p2")}
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          {t("aboutSection.p3")}
        </p>
      </div>
    </section>
  );
}
