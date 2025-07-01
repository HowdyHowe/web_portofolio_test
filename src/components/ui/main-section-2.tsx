import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import { DiJavascript } from "react-icons/di";
import { SiKotlin, SiPhp } from "react-icons/si";
import TooltipWidget from "./tooltip";
import { useState } from "react";
import { FaDartLang,  FaPython } from "react-icons/fa6";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const progLanguage = {
  "dart": [
    { title: "Dart 1", content: "Swipe me!" },
    { title: "Dart 2", content: "Nice!" },
    { title: "Dart 3", content: "Keep going" },
    { title: "Dart 4", content: "Almost done" },
    { title: "Dart 5", content: "Great!" },
  ],
 "kotlin": [
    { title: "Kotlin 1", content: "Swipe me!" },
    { title: "Kotlin 2", content: "Nice!" },
    { title: "Kotlin 3", content: "Keep going" },
    { title: "Kotlin 4", content: "Almost done" },
    { title: "Kotlin 5", content: "Great!" },
  ],
  "php": [
    { title: "PHP 1", content: "Swipe me!" },
    { title: "PHP 2", content: "Nice!" },
    { title: "PHP 3", content: "Keep going" },
    { title: "PHP 4", content: "Almost done" },
    { title: "PHP 5", content: "Great!" },
  ],
  "javascript": [
    { title: "Javascript 1", content: "Swipe me!" },
    { title: "Javascript 2", content: "Nice!" },
    { title: "Javascript 3", content: "Keep going" },
    { title: "Javascript 4", content: "Almost done" },
    { title: "Javascript 5", content: "Great!" },
  ],
  "python": [
    { title: "Python 1", content: "Swipe me!" },
    { title: "Python 2", content: "Nice!" },
    { title: "Python 3", content: "Keep going" },
    { title: "Python 4", content: "Almost done" },
    { title: "Python 5", content: "Great!" },
  ],
};

// const language = [
//   "dart",  "Kotlin", "PHP", "Javascript", "python"
// ];

function MainSection2() {
  const {isDark} = useTheme();
  const [index, setIndex] = useState(0);
  const [lang, setLang] = useState<keyof typeof progLanguage>("dart")

  const curLang = progLanguage[lang]
  const next = () => setIndex((index + 1) % curLang.length)
  const prev = () => setIndex((index - 1 + curLang.length) % curLang.length)

  const changeLang = (language:keyof typeof progLanguage) => {
    if (lang != language) {
      setLang(language)
      setIndex(0)
    }
  }

    return (
      <div className="flex flex-row items-center justify-center relative w-full h-screen bg-cover bg-center snap-start overflow-hidden">
        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/>

        <div className="flex flex-col items-center justify-around w-[80px] h-[80%] bg-[#872341] rounded-s-3xl text-center hover:w-[130px] duration-300">
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={1000}>
            <TooltipWidget
              tooltipText="Dart"
              duration="duration-700"
              onClick={() => changeLang("dart")}
            >
              <div className={`flex flex-col items-center justify-center w-[60px] h-[60px] ${lang == "dart" ? "bg-[#d1d1d1] rounded-xl duration-500" : ""}`}>
                  <FaDartLang size={32} className={lang == "dart" ? "fill-[#872341] duration-500" : ""}/>
              </div>
            </TooltipWidget>
          </FadeSection>
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={1300}>
            <TooltipWidget
              tooltipText="Kotlin"
              duration="duration-700"
              onClick={() =>  {
                changeLang("kotlin")
                setIndex(0)
              }}
            >
              <div className={`flex flex-col items-center justify-center w-[60px] h-[60px] ${lang == "kotlin" ? "bg-[#d1d1d1] rounded-xl duration-500" : ""}`}>
                <SiKotlin size={31} className={lang == "kotlin" ? "fill-[#872341] duration-500" : ""}/>
              </div>
            </TooltipWidget>
          </FadeSection>
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={1600}>
            <TooltipWidget
              tooltipText="PHP"
              duration="duration-700"
              onClick={() => changeLang("php")}
            >
              <div className={`flex flex-col items-center justify-center w-[60px] h-[60px] ${lang == "php" ? "bg-[#d1d1d1] rounded-xl duration-500" : ""}`}>
                  <SiPhp size={45} className={lang == "php" ? "fill-[#872341] duration-500" : ""}/>
              </div>
            </TooltipWidget>
          </FadeSection>
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={1900}>
            <TooltipWidget
              tooltipText="Javascript"
              duration="duration-700"
              onClick={() => changeLang("javascript")}
            >
              <div className={`flex flex-col items-center justify-center w-[60px] h-[60px] ${lang == "javascript" ? "bg-[#d1d1d1] rounded-xl duration-500" : ""}`}>
                <DiJavascript size={43} className={lang == "javascript" ? "fill-[#872341] duration-500" : ""}/>
              </div>
            </TooltipWidget>
          </FadeSection>
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={2200}>
            <TooltipWidget
              tooltipText="Python"
              duration="duration-700"
              onClick={() => changeLang("python")}
            >
              <div className={`flex flex-col items-center justify-center w-[60px] h-[60px] ${lang == "python" ? "bg-[#D1D1D1] rounded-xl duration-500" : ""}`}>
                <FaPython size={40} className={lang == "python" ? "fill-[#872341] duration-500" : ""}/>
              </div>
            </TooltipWidget>
          </FadeSection>
        </div>

          <div className="flex flex-col items-center justify-center h-[80%] w-[80%] text-[#2c2c2c] bg-[#d1d1d1] rounded-e-3xl">
            <div className="flex flex-row items-end justify-center h-[100%] w-[100%]">
                <div className="flex flex-col justify-center w-[50%] h-[80%] rounded-xl m-5 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    >
                      <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={2200}>
                        <p className="font-jetbrainsmono text-3xl font-bold truncate duration-300">{curLang[index].title}. {lang}</p>
                        <p className="font-jetbrainsmono text-base">contoh teks contoh teks contoh teks contoh teks contoh teks</p>
                      </FadeSection>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col items-center justify-center w-[500px] h-[500px] bg-white rounded-xl m-5 duration-300">
                      <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={2500}>
                        <p>{curLang[index].title}</p>
                        <p>{curLang[index].content}</p>
                      </FadeSection>
                    </div>
                  </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex flex-row w-full items-start justify-start px-8 py-2">
              <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={2200}>
                <TooltipWidget
                  tooltipText="Previous"
                  duration="duration-700"
                  onClick={prev}
                  >
                    <RxTriangleLeft size={60}/>
                </TooltipWidget>
              </FadeSection>
              <TooltipWidget
                tooltipText="Next"
                duration="duration-700 bg-[#d1d1d1] text-[#2c2c2c]"
                onClick={next}
                >
                  <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={2200}>
                      <RxTriangleRight size={60}/>
                  </FadeSection>
              </TooltipWidget>
            </div>
          </div>
        {/* <div className="absolute z-[-1] w-[80%] max-w-[800px] h-auto aspect-video"
          style={{ backgroundImage: isDark ? "url('/src/assets/images/background-section-2-light.svg')" : "url('/src/assets/images/background-section-2-dark.svg')",
          backgroundSize: 'contain',}}/>
        <FadeSection durationMs={1000} from="translate-y-[50px]" to="translate-y-0">
          <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
        </FadeSection>
        <FadeSection durationMs={1500} from="translate-y-[50px]" to="translate-y-0">
          <p className="mt-4 text-lg text-center">
            This is a simple example of a main section component no 2.
          </p>
        </FadeSection> */}
      </div>
    );
  }

  export default MainSection2;