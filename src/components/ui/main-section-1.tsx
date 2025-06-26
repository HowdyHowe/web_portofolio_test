import { LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";
import TextLoader from "../hooks/text-hook";
import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import { AiOutlineX } from "react-icons/ai";

function MainSection1() {
  const {isDark} = useTheme();

  return (
    <div className="flex flex-row items-center justify-evenly relative w-full h-screen bg-cover bg-center snap-start scroll-smooth">

      <div className="absolute inset-0 bg-cover bg-center z-[-1] opacity-0 animate-fadeIn"
          style={{ backgroundImage: isDark ? "url('/src/assets/images/background-section-1-light.svg')": "url('/src/assets/images/background-section-1-dark.svg')"  }}/>
      <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/>

      <div className="flex flex-col items-start justify-between pt-[5%] w-[50%] h-[50%]">
        <div>
          <FadeSection from={"translate-x-[-50px]"} to={"translate-y-0"} durationMs={1000}>
            <p className="font-jetbrainsmono text-base">
              Hi, Selamat Datang
            </p>
          </FadeSection>
          <FadeSection from={"translate-y-0"} to={"translate-y-0"} durationMs={2500}>
            <p className="font-jetbrainsmono text-3xl">
              Saya Toba Amiruddin Sitorus
            </p>
          </FadeSection>
          <FadeSection from={"translate-y-[70px]"} to={"translate-y-0"} durationMs={1500}>
            <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm pt-8" />
          </FadeSection>
        </div>

        <FadeSection from={"translate-y-[-50px]"} to={"translte-y-0"} durationMs={1300}>
          <ul className="flex flex-row items-center justify-start">
            <li className="flex items-center justify-start w-[120px] left-0">
              <LiaGithub size={35}/>
            </li>
            <li className="flex items-center justify-start w-[120px] left-0">
              <LiaInstagram size={38}/>
            </li>
            <li className="flex items-center justify-start w-[120px] left-0">
              <AiOutlineX size={28}/>
            </li>
            <li className="flex items-center justify-start w-[120px] left-0">
              <LiaLinkedin size={36}/>
            </li>
          </ul>
        </FadeSection>
      </div>

      <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={700}>
        <img src="/src/assets/images/picxample.jpg" alt="profile picture" className="w-[400px] rounded-full opacity-70"/>
      </FadeSection>

    </div>
  );
}

export default MainSection1;