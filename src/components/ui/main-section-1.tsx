import { LiaDownloadSolid, LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";
import TextLoader from "../hooks/text-hook";
import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import { AiOutlineX } from "react-icons/ai";
import TooltipWidget from "./tooltip";

function MainSection1() {
  const {isDark} = useTheme();

  return (
    <div className="flex flex-col items-center justify-center relative w-full h-screen bg-cover bg-center snap-start overflow-hidden">

      <div className="flex flex-row items-center justify-evenly">
        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-0 animate-fadeIn"
            style={{ backgroundImage: isDark ? "url('/src/assets/images/background-section-1-light.svg')": "url('/src/assets/images/background-section-1-dark.svg')"  }}/>
        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/>

        <div className="flex flex-col items-start justify-between mt-[150px] w-[55%] m-6">
          <div>
            <FadeSection from={"translate-x-[-80px]"} to={"translate-y-0"} durationMs={1500}>
              <p className="font-jetbrainsmono text-base">
                Hi, Selamat Datang
              </p>
            </FadeSection>
            <FadeSection from={"translate-y-[80px]"} to={"translate-y-0"} durationMs={1500}>
              <p className="font-jetbrainsmono text-5xl ">
                Saya Toba Amiruddin Sitorus
              </p>
            </FadeSection>
            <div className="flex flex-row">
              <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1500}>
                <div className="w-[75px] h-[10px] bg-[#F05941]  rounded-2xl mt-[36px] mr-2"/>
              </FadeSection>
              <FadeSection from={"translate-y-[70px]"} to={"translate-y-0"} durationMs={2000}>
                <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm my-[30px] text-justify" />
              </FadeSection>
            </div>
            <FadeSection from={"translate-y-[80px]"} to={"translate-y-0"} durationMs={1300}>
                <div className="flex items-center justify-center w-[250px] h-[50px] bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                  <p className="font-jetbrainsmono text-base"> Download CV Saya </p><LiaDownloadSolid size={25} className="ml-5"/>
                </div>
            </FadeSection>

            <div className="grid grid-cols-4 h-[150px] z-10">
              <div className="flex flex-col items-center justify-center">
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono">Years of Experience</p>
                </FadeSection>
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono text-6xl">2+</p>
                </FadeSection>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono">Projects</p>
                </FadeSection>
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono text-6xl">25</p>
                </FadeSection>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono">Clients</p>
                </FadeSection>
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono text-6xl">14</p>
                </FadeSection>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono">Language Mastered</p>
                </FadeSection>
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono text-6xl">5</p>
                </FadeSection>
              </div>
            </div>
          </div>

          <FadeSection from={"translate-y-[-50px]"} to={"translte-y-0"} durationMs={1300}>
            <ul className="flex flex-row items-center mt-[75px] gap-[75px]">
              <li>
                <TooltipWidget
                  tooltipText="Github"
                  duration="duration-700"
                  link="https://www.google.com/"
                >
                  <LiaGithub size={39} color="#892341"/>
                </TooltipWidget>
              </li>
              <li>
                <TooltipWidget
                  tooltipText="Instagram"
                  duration="duration-700"
                  link="https://www.google.com/"
                >
                  <LiaInstagram size={42}/>
                </TooltipWidget>
              </li>
              <li>
                <TooltipWidget
                  tooltipText="X (Formerly Twitter)"
                  duration="duration-700"
                  link="https://www.google.com/"
                >
                  <AiOutlineX size={32}/>
                </TooltipWidget>
              </li>
              <li>
                <TooltipWidget
                  tooltipText="LinkedIn"
                  duration="duration-700"
                  link="https://www.google.com/"
                >
                  <LiaLinkedin size={40}/>
                </TooltipWidget>
              </li>
            </ul>
          </FadeSection>
        </div>

        <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1000}>
          <img src="/src/assets/images/picxample.jpg" alt="profile picture" className="w-[350px] max-w-[200] rounded-full opacity-70 p-5"/>
        </FadeSection>
      </div>

    </div>
  );
}

export default MainSection1;