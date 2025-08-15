// import { useTheme } from "../hooks/theme-hook";
import FadeSection from "../widget/fade";
import Fireflies from "../widget/fireflies";
import TextLoader from "../hooks/text-hook";
import TooltipWidget from "../widget/tooltip";
import { AiOutlineX } from "react-icons/ai";
import { LiaDownloadSolid, LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";

function MainSection1() {
  // Hook useTheme pada section 1
  // const {isDark} = useTheme();

  return (
    <div className="main-section-1" id="home">

      {/* penggunaan useTheme hook untuk gambar latar belakang */}
      {/* <div className="absolute inset-0 bg-cover bg-center z-10 "
          style={{ backgroundImage: isDark ? "url('/src/assets/images/background-section-1-light.svg')": "url('/src/assets/images/background-section-1-dark.svg')"  }}/> */}
      <div className="flex flex-row-reverse items-center justify-center z-20 mt-[2%]">

        {/* Penggunaan useTheme hook */}
        {/* <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/> */}

        <Fireflies count={25} color="#FAF6E9"/>

        <div className="flex flex-col items-start justify-between w-[35%] min-w-[550px] m-6">
          <div>
            <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1300}>
              <p className="font-jetbrainsmono font-bold text-7xl">
                Hello
              </p>
            </FadeSection>
            <FadeSection from={"translate-y-[-80px]"} to={"translate-y-0"} durationMs={1500}>
              <span className="font-jetbrainsmono text-8xl bg-gradient-to-r from-[#872341] to-[#F05941] bg-clip-text text-transparent">
                I'm Your Name
              </span>
            </FadeSection>
            <div className="flex flex-row items-center">
              <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1700}>
                <div className="w-[125px] h-[5px] bg-[#872341]  rounded-2xl mr-2"/>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={2000}>
                <p className="font-jetbrainsmono text-4xl my-8">Software Engineer</p>
              </FadeSection>
            </div>
            <div className="flex flex-row">
              <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1700}>
                <div className="w-[50px] h-[5px] bg-[#F05941] rounded-2xl mt-[7px] mr-2"/>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={2000}>
                <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm mb-[30px]" />
              </FadeSection>
            </div>
            <FadeSection from={"translate-y-[-50px]"} to={"translte-y-0"} durationMs={1300}>
              <ul className="flex flex-row items-center justify-start mb-5 gap-[50px]">
                <li>
                  <TooltipWidget scale={true} tooltipText="Github" duration="duration-700" link="https://www.google.com/">
                    <LiaGithub size={40} className="rounded-lg"/>
                  </TooltipWidget>
                </li>
                <li>
                  <TooltipWidget scale={true} tooltipText="Instagram" duration="duration-700" link="https://www.google.com/">
                    <LiaInstagram size={42} className="rounded-lg"/>
                  </TooltipWidget>
                </li>
                <li>
                  <TooltipWidget scale={true} tooltipText="X (Formerly Twitter)" duration="duration-700" link="https://www.google.com/">
                    <AiOutlineX size={40} className="rounded-lg p-1"/>
                  </TooltipWidget>
                </li>
                <li>
                  <TooltipWidget scale={true} tooltipText="LinkedIn" duration="duration-700" link="https://www.google.com/">
                    <LiaLinkedin size={41} className="rounded-lg"/>
                  </TooltipWidget>
                </li>
              </ul>
            </FadeSection>
            <FadeSection from={"translate-y-[80px]"} to={"translate-y-0"} durationMs={1300}>
                <div className="flex items-center justify-center w-[250px] h-[50px] bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                  <p className="font-jetbrainsmono text-base"> Download My CV </p><LiaDownloadSolid size={25} className="ml-5"/>
                </div>
            </FadeSection>
          </div>

          <div className="grid grid-cols-3 w-[40%] min-w-[600px] mt-[20px]">
            <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1200}>
              <div className="flex flex-col items-center justify-center">
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono font-bold text-7xl text-[#BE3144]">2+</p>
                </FadeSection>
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={700}>
                  <p className="font-jetbrainsmono font-bold">Years of Experience</p>
                </FadeSection>
              </div>
            </FadeSection>

            <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1200}>
              <div className="flex flex-col items-center justify-center">
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono font-bold text-7xl text-[#BE3144]">25</p>
                </FadeSection>
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={700}>
                  <p className="font-jetbrainsmono font-bold">Projects</p>
                </FadeSection>
              </div>
            </FadeSection>

            <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1200}>
              <div className="flex flex-col items-center justify-center">
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                  <p className="font-jetbrainsmono font-bold text-7xl text-[#BE3144]">14</p>
                </FadeSection>
                <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={700}>
                  <p className="font-jetbrainsmono font-bold">Clients</p>
                </FadeSection>
              </div>
            </FadeSection>
          </div>
        </div>

        {/* blocksized untuk jarak */}
        <div className="w-[25px]"/>

        <div>
          <div className="z-10">
            <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1000}>
              <img src="/src/assets/images/jpg/picxample2.jpg" alt="profile picture" className="w-[450px] max-w-[200] rounded-xl m-5"/>
            </FadeSection>
          </div>
        </div>

      </div>

    </div>
  );
}

export default MainSection1;