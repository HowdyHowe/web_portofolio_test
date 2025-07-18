import { LiaDownloadSolid, LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";
import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import { AiOutlineX } from "react-icons/ai";
import TooltipWidget from "./tooltip";
import TextLoader from "../hooks/text-hook";

function MainSection1() {
  const {isDark} = useTheme();

  return (
    <div className="flex flex-col items-center justify-center relative w-full h-screen bg-cover bg-center snap-start overflow-hidden">

      <div className="flex flex-row-reverse items-center justify-center mt-[2%]">
        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-0 animate-fadeIn"
            style={{ backgroundImage: isDark ? "url('/src/assets/images/background-section-1-light.svg')": "url('/src/assets/images/background-section-1-dark.svg')"  }}/>
        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/>

        <div className="flex flex-col items-start justify-between w-[50%] min-w-[500px] m-6">
          <div>
            <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1300}>
              <p className="font-bold text-8xl">
                Hello
              </p>
            </FadeSection>
            <FadeSection from={"translate-y-[-80px]"} to={"translate-y-0"} durationMs={1500}>
              <span className="font-jetbrainsmono text-6xl bg-gradient-to-r from-[#872341] to-[#F05941] bg-clip-text text-transparent">
                I'm Toba Amiruddin Sitorus
              </span>
            </FadeSection>
            <div className="flex flex-row">
              <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1700}>
                <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[7px] mr-2"/>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={2000}>
                <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm mb-[30px]" />
              </FadeSection>
            </div>
            <FadeSection from={"translate-y-[80px]"} to={"translate-y-0"} durationMs={1300}>
                <div className="flex items-center justify-center w-[250px] h-[50px] bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                  <p className="font-jetbrainsmono text-base"> Download My CV </p><LiaDownloadSolid size={25} className="ml-5"/>
                </div>
            </FadeSection>

          </div>

          <FadeSection from={"translate-y-[-50px]"} to={"translte-y-0"} durationMs={1300}>
            <ul className="flex flex-row items-center mt-[30px] gap-[75px]">
              <li>
                <TooltipWidget scale={true} tooltipText="Github" duration="duration-700" link="https://www.google.com/">
                  <LiaGithub size={41}/>
                </TooltipWidget>
              </li>
              <li>
                <TooltipWidget scale={true} tooltipText="Instagram" duration="duration-700" link="https://www.google.com/">
                  <LiaInstagram size={42}/>
                </TooltipWidget>
              </li>
              <li>
                <TooltipWidget scale={true} tooltipText="X (Formerly Twitter)" duration="duration-700" link="https://www.google.com/">
                  <AiOutlineX size={32}/>
                </TooltipWidget>
              </li>
              <li>
                <TooltipWidget scale={true} tooltipText="LinkedIn" duration="duration-700" link="https://www.google.com/">
                  <LiaLinkedin size={40}/>
                </TooltipWidget>
              </li>
            </ul>
          </FadeSection>
        </div>

        {/* blocksized for space */}
        <div className="w-[75px]"/>

        <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1000}>
          <img src="/src/assets/images/picxample.jpg" alt="profile picture" className="w-[450px] max-w-[200] border-2 border-[#F05941] rounded-full p-5 m-5"/>
        </FadeSection>
      </div>

      <div className="grid grid-cols-4 w-[80%] h-[125px] mt-5">
        <div className="flex flex-col items-center justify-center border-r-4 border-[#872341]">
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
            <p className="font-jetbrainsmono">Years of Experience</p>
          </FadeSection>
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1200}>
            <p className="font-jetbrainsmono text-6xl">2+</p>
          </FadeSection>
        </div>
        <div className="flex flex-col items-center justify-center border-r-4 border-[#872341]">
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1300}>
            <p className="font-jetbrainsmono">Projects</p>
          </FadeSection>
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1400}>
            <p className="font-jetbrainsmono text-6xl">25</p>
          </FadeSection>
        </div>
        <div className="flex flex-col items-center justify-center border-r-4 border-[#872341]">
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1600}>
            <p className="font-jetbrainsmono">Clients</p>
          </FadeSection>
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1600}>
            <p className="font-jetbrainsmono text-6xl">14</p>
          </FadeSection>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1900}>
            <p className="font-jetbrainsmono">Language Mastered</p>
          </FadeSection>
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1800}>
            <p className="font-jetbrainsmono text-6xl">5</p>
          </FadeSection>
        </div>
      </div>

    </div>
  );
}

export default MainSection1;