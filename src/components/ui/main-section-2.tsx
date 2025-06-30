import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import { DiJavascript } from "react-icons/di";
import { SiKotlin } from "react-icons/si";
import TooltipWidget from "./tooltip";
import { useState } from "react";
import { FaDartLang, FaPhp, FaPython } from "react-icons/fa6";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const cards = [
  { title: "Card 1", content: "Swipe me!" },
  { title: "Card 2", content: "Nice!" },
  { title: "Card 3", content: "Keep going" },
  { title: "Card 4", content: "Almost done" },
  { title: "Card 5", content: "Great!" },
];

function MainSection2() {
  const {isDark} = useTheme();
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % cards.length)
    const prev = () => setIndex((index - 1 + cards.length) % cards.length)

    return (
      <div className="flex flex-row items-center justify-center relative w-full h-screen bg-cover bg-center snap-start overflow-hidden">
        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/>

        <div className="flex flex-col items-center justify-around w-[150px] h-[80%] bg-[#394867] rounded-s-3xl text-center">
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={1000}>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-xl">
              <TooltipWidget
                tooltipText="Dart"
                duration="duration-700"
                link="https://www.google.com/"
              >
                <FaDartLang size={32} />
              </TooltipWidget>
            </div>
          </FadeSection>
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={1300}>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-xl">
              <TooltipWidget
                tooltipText="Kotlin"
                duration="duration-700"
                link="https://www.google.com/"
              >
                <SiKotlin size={31}/>
              </TooltipWidget>
            </div>
          </FadeSection>
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={1600}>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-xl">
              <TooltipWidget
                tooltipText="PHP"
                duration="duration-700"
                link="https://www.google.com/"
              >
                <FaPhp size={45}/>
              </TooltipWidget>
            </div>
          </FadeSection>
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={1900}>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-xl">
              <TooltipWidget
                tooltipText="Javascript"
                duration="duration-700"
                link="https://www.google.com/"
              >
                <DiJavascript size={43}/>
              </TooltipWidget>
            </div>
          </FadeSection>
          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={2200}>
            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-xl">
              <TooltipWidget
                tooltipText="Python"
                duration="duration-700"
                link="https://www.google.com/"
              >
                <FaPython size={40}/>
              </TooltipWidget>
            </div>
          </FadeSection>
        </div>

          <div className="flex flex-col items-center justify-center h-[80%] w-[70%] text-[#2c2c2c] bg-[#d1d1d1] rounded-e-3xl">

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
                        <p className="font-jetbrainsmono text-3xl font-bold truncate">{cards[index].title}. {cards[index].content}</p>
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
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col items-center justify-center w-[500px] h-[500px] bg-white rounded-xl m-5 duration-500">
                          <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={2500}>
                              <h2>{cards[index].title}</h2>
                              <p>{cards[index].content}</p>
                          </FadeSection>
                    </div>
                  </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex flex-row w-full items-start justify-start px-10 py-2">
              <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={2200}>
                <TooltipWidget
                  tooltipText="Previous"
                  duration="duration-700 bg-[#2c2c2c] text-[#d1d1d1]"
                  onClick={prev}
                  >
                    <RxTriangleLeft size={60}/>
                </TooltipWidget>
              </FadeSection>
              <FadeSection from="translate-y-[50px]" to="tranlate-y-0" durationMs={2200}>
                <TooltipWidget
                  tooltipText="Next"
                  duration="duration-700 bg-[#2c2c2c] text-[#d1d1d1]"
                  onClick={next}
                  >
                    <RxTriangleRight size={60}/>
                  </TooltipWidget>
              </FadeSection>
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