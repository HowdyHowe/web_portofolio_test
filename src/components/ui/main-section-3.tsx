import { useState } from "react";
import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import TooltipWidget from "./tooltip";
import { SiJavascript, SiKotlin, SiPhp} from "react-icons/si";
import { FaDartLang, FaPython } from "react-icons/fa6";
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
  ],
  "python": [
    { title: "Python 1", content: "Swipe me!" },
    { title: "Python 2", content: "Nice!" },
    { title: "Python 3", content: "Keep going" },
    { title: "Python 4", content: "Almost done" },
    { title: "Python 5", content: "Great!" },
  ],
};

function MainSection3() {
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
      <div className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-center snap-start overflow-hidden">

        <div className="flex flex-row items-center justify-center relative w-full h-full snap-start overflow-hidden">
          <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/>
          <div className="flex flex-col items-center justify-around w-[80px] h-[60%] border-2 border-[#F05941] rounded-s-3xl text-center hover:w-[130px] duration-300">
            <FadeSection from="translate-y-[-50px]" to="translate-y-0" durationMs={1000}>
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
            <FadeSection from="translate-y-[-50px]" to="translate-y-0" durationMs={1300}>
              <TooltipWidget
                tooltipText="Kotlin"
                duration="duration-700"
                onClick={() =>  {
                  changeLang("kotlin")
                  setIndex(0)
                }}
              >
                <div className={`flex flex-col items-center justify-center w-[60px] h-[60px] ${lang == "kotlin" ? "bg-[#d1d1d1] rounded-xl duration-500" : ""}`}>
                  <SiKotlin size={30} className={lang == "kotlin" ? "fill-[#872341] duration-500" : ""}/>
                </div>
              </TooltipWidget>
            </FadeSection>
            <FadeSection from="translate-y-[-50px]" to="translate-y-0" durationMs={1600}>
              <TooltipWidget
                tooltipText="PHP"
                duration="duration-700"
                onClick={() => changeLang("php")}
              >
                <div className={`flex flex-col items-center justify-center w-[60px] h-[60px] ${lang == "php" ? "bg-[#d1d1d1] rounded-xl duration-500" : ""}`}>
                  <SiPhp size={42} className={lang == "php" ? "fill-[#872341] duration-500" : ""}/>
                </div>
              </TooltipWidget>
            </FadeSection>
            <FadeSection from="translate-y-[-50px]" to="translate-y-0" durationMs={1900}>
              <TooltipWidget
                tooltipText="Javascript"
                duration="duration-700"
                onClick={() => changeLang("javascript")}
              >
                <div className={`flex flex-col items-center justify-center w-[60px] h-[60px] ${lang == "javascript" ? "bg-[#d1d1d1] rounded-xl duration-500" : ""}`}>
                  <SiJavascript size={38} className={lang == "javascript" ? "fill-[#872341] duration-500" : ""}/>
                </div>
              </TooltipWidget>
            </FadeSection>
            <FadeSection from="translate-y-[-50px]" to="translate-y-0" durationMs={2200}>
              <TooltipWidget
                tooltipText="Python"
                duration="duration-700"
                onClick={() => changeLang("python")}
              >
                <div className={`flex flex-col items-center justify-center w-[60px] h-[60px] ${lang == "python" ? "border-2 border-[#d1d1d1] rounded-xl duration-500" : ""}`}>
                  <FaPython size={40} className={lang == "python" ? "fill-[#872341] duration-500" : ""}/>
                </div>
              </TooltipWidget>
            </FadeSection>
          </div>

          <div className="flex flex-col items-center justify-center h-[60%] w-[55%] overflow-hidden">
            <div className="flex flex-row items-center justify-evenly h-[100%] w-[100%]">
              <div className="flex flex-col justify-center w-[50%] h-[400px] rounded-xl m-5 py-2 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  >
                    <FadeSection from="translate-y-[50px]" to="translate-y-0" durationMs={1500}>
                      <div className="grid grid-rows-3 w-full h-[400px]">
                        <div className="flex items-start justify-start">
                          <p className="font-jetbrainsmono text-3xl font-bold truncate duration-300">{index + 1}. {lang}</p>
                        </div>
                        <div className="flex items-start justify-start">
                          <p className="font-jetbrainsmono text-base">contoh teks contoh teks contoh teks contoh teks contoh teks</p>
                        </div>
                        <div className="flex flex-row items-center justify-start border-t">
                          <p>Logo 1</p>
                          <p>Logo 2</p>
                        </div>
                      </div>
                    </FadeSection>
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                <div className="flex grid-cols-3 items-center justify-center w-[400px] h-[400px] border border-[#872341] rounded-xl m-5 duration-300">
                  <FadeSection from="translate-y-[-50px]" to="translate-y-0" durationMs={1800}>
                      <p>{curLang[index].title}</p>
                      <p>{curLang[index].content}</p>
                  </FadeSection>
                </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-row w-full h-[60px] items-center px-6 py-2">

              <FadeSection from="translate-x-[30px]" to="translate-y-0" durationMs={2200}>
                <TooltipWidget tooltipText="Previous" duration="duration-700" onClick={prev}>
                  <RxTriangleLeft size={50} className="mr-2 border border-[#d1d1d1] rounded-xl"/>
                </TooltipWidget>
              </FadeSection>

              <FadeSection from="translate-y-[30px]" to="translate-y-0" durationMs={1800}>
                <p className="flex items-center justify-center pb-2 font-jetbrainsmono text-xl duration-300">{index + 1} / {curLang.length}</p>
              </FadeSection>

              <FadeSection from="translate-x-[-30px]" to="translate-y-0" durationMs={2200}>
                <TooltipWidget tooltipText="Next" duration="duration-700" onClick={next}>
                  <RxTriangleRight size={50} className="ml-2 border border-[#d1d1d1] rounded-xl"/>
                </TooltipWidget>
              </FadeSection>
            </div>
          </div>
        </div>
    </div>
    );
  }

  export default MainSection3;