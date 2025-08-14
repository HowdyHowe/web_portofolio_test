// import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";
import FadeSection from "./fade";
import TextLoader from "../hooks/text-hook";
import { MdCode, MdDns, MdEmail, MdLocationPin, MdPerson, MdPhone, MdSmartphone } from "react-icons/md";


function MainSection2() {
  // Hook useTheme pada section 2
  // const {isDark} = useTheme();

  return (
    <div className="flex flex-row items-end justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth overflow-hidden" id="aboutme">

        {/* Penggunaan useTheme hook */}
        {/* <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} /> */}

        <Fireflies count={25} color="#FAF6E9"/>

        <div className="flex flex-col items-center justify-center w-[90%] h-full pt-[100px]">
          <div className="z-20 w-[200px] min-w-[200px] ">
            <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
              <img src="/src/assets/images/jpg/picxample.jpg" alt="profile picture" className="rounded-full"/>
            </FadeSection>
          </div>
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={700}>
            <div className="mb-[20px] font-jetbrainsmono text-2xl">I'm -Your Long Name Here-</div>
          </FadeSection>

          <FadeSection durationMs={1200} from="translate-y-[50px]" to="translate-y-0">
            <span className="font-jetbrainsmono text-8xl bg-gradient-to-r from-[#872341] to-[#F05941] bg-clip-text text-transparent">
              About Me
            </span>
          </FadeSection>
          <div className="flex flex-row w-[1000px] min-w-[700px]">
            <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1700}>
              <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[28px] mr-2"/>
            </FadeSection>
            <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1500}>
              <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm my-[20px] " />
            </FadeSection>
          </div>
          <div className="flex flex-row-reverse items-center justify-center">
            <div className="flex flex-col items-start justify-center w-[350px] min-w-[350px] mb-[25px]">
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center mb-2">
                  <MdEmail size={40} color="#BE3144" className="w-[60px] h-[60px] p-[15px] mr-2 bg-[#2c2c2c] rounded-lg"/>
                  <p className="font-jetbrainsmono text-lg text-center">example@gmail.com</p>
                </div>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center mb-2">
                  <MdPhone size={40} color="#BE3144" className="w-[60px] h-[60px] p-[15px] mr-2 bg-[#2c2c2c] rounded-lg"/>
                  <p className="font-jetbrainsmono text-lg text-center">+628 12 3456 7890</p>
                </div>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center mb-2">
                  <MdLocationPin size={40} color="#BE3144" className="w-[60px] h-[60px] p-[14px] mr-2 bg-[#2c2c2c] rounded-lg"/>
                  <p className="font-jetbrainsmono text-lg text-center">Central Sumatra, Indonesia</p>
                </div>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center mb-2">
                  <MdPerson size={40} color="#BE3144" className="w-[60px] h-[60px] p-[13px] mr-2 bg-[#2c2c2c] rounded-lg"/>
                  <p className="font-jetbrainsmono text-lg text-center">Available For Work</p>
                </div>
              </FadeSection>
            </div>


            <div className="flex flex-col items-start justify-start w-[600px]">
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1400}>
                <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                  <MdCode size={37} color="#BE3144" className="min-w-[40px]"/>
                  <p className="font-jetbrainsmono text-xl ml-6">
                    Frontend Development
                  </p>
                </div>
                <pre>◌</pre>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1200}>
                <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                  <MdDns  size={35} color="#BE3144" className="min-w-[40px]"/>
                  <p className="font-jetbrainsmono text-xl ml-6">
                    Backend Development
                  </p>
                </div>
                <pre>◌</pre>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                  <MdSmartphone size={35} color="#BE3144" className="min-w-[40px]"/>
                  <p className="font-jetbrainsmono text-xl ml-6">
                    Android App Development
                  </p>
                </div>
                <pre>◌</pre>
              </FadeSection>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default MainSection2;