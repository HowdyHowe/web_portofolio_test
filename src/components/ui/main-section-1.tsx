import { LiaDownloadSolid, LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";
import TextLoader from "../hooks/text-hook";
import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import { AiOutlineX } from "react-icons/ai";
import TooltipWidget from "./tooltip";
import Alert from "./alert";

function MainSection1() {
  const {isDark} = useTheme();

  return (
    <div className="flex flex-row items-center justify-evenly relative w-full h-screen bg-cover bg-center snap-start overflow-hidden">

      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-0 animate-fadeIn"
          style={{ backgroundImage: isDark ? "url('/src/assets/images/background-section-1-light.svg')": "url('/src/assets/images/background-section-1-dark.svg')"  }}/>
      <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/>

      <div className="flex flex-col items-start justify-between mt-[150px] w-[60%]  m-6">
          <Alert/>
        <div>
          <FadeSection from={"translate-x-[-50px]"} to={"translate-y-0"} durationMs={1500}>
            <p className="font-jetbrainsmono text-base">
              Hi, Selamat Datang
            </p>
          </FadeSection>
          <FadeSection from={"translate-y-0"} to={"translate-y-0"} durationMs={2500}>
            <p className="font-jetbrainsmono text-5xl ">
              Saya Toba Amiruddin Sitorus
            </p>
          </FadeSection>
          <div className="flex flex-row">
            <FadeSection from={"translate-x-0"} to={"translate-y-0"} durationMs={1500}>
              <div className="w-[75px] h-[5px] bg-[#F05941] rounded-2xl mt-[47px] mr-2"/>
            </FadeSection>
            <FadeSection from={"translate-y-[70px]"} to={"translate-y-0"} durationMs={2000}>
              <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm mt-[40px] text-justify" />
            </FadeSection>
          </div>
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1300}>
              <div className="flex items-center justify-center w-[250px] h-[50px] mt-5 bg-[#872341] rounded-2xl border border-spacing-1 border-[#2c2c2c] hover:border-[#d1d1d1] duration-500">
                <p className="font-jetbrainsmono text-base"> Download CV Saya </p><LiaDownloadSolid size={25} className="ml-5"/>
              </div>
          </FadeSection>
        </div>

        <FadeSection from={"translate-y-[-50px]"} to={"translte-y-0"} durationMs={1300}>
          <ul className="flex flex-row items-center gap-12 mt-[150px]">
            <li>
              <TooltipWidget
                tooltipText="Github"
                duration="duration-700"
                link="https://www.google.com/"
              >
                <LiaGithub size={39}/>
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
  );
}

export default MainSection1;