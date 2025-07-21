import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";
import FadeSection from "./fade";
import TextLoader from "../hooks/text-hook";
import { BiCodeAlt, BiMobileAlt, BiServer } from "react-icons/bi";
import { TfiLocationPin } from "react-icons/tfi";
import { FaFileAlt, FaUserTie } from "react-icons/fa";

function MainSection2() {
  const {isDark} = useTheme();

    return (
      <div className="flex flex-col items-center justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth overflow-hidden">

        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />

        <div className="flex flex-row w-[80%] items-center justify-center">
          {/* <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1000}>
            <img src="/src/assets/images/picxample.jpg" alt="profile picture" className="w-[450px] max-w-[200] rounded-xl m-5"/>
          </FadeSection> */}
          <div className="flex flex-col items-start justify-start w-[600px]">
            <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1400}>
              <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                <BiCodeAlt size={37} color="#BE3144" className="min-w-[40px]"/>
                <p className="font-jetbrainsmono text-xl ml-6">
                  Frontend Development
                </p>
              </div>
              <pre>◌</pre>
            </FadeSection>
            <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1200}>
              <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                <BiServer size={35} color="#BE3144" className="min-w-[40px]"/>
                <p className="font-jetbrainsmono text-xl ml-6">
                  Backend Development
                </p>
              </div>
              <pre>◌</pre>
            </FadeSection>
            <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
              <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                <BiMobileAlt size={35} color="#BE3144" className="min-w-[40px]"/>
                <p className="font-jetbrainsmono text-xl ml-6">
                  Mobile App Development (Android)
                </p>
              </div>
              <pre>◌</pre>
            </FadeSection>
            <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={800}>
              <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                <FaFileAlt size={30} color="#BE3144" className="min-w-[40px]"/>
                <p className="font-jetbrainsmono text-xl ml-6">
                  Advanced Microsoft Office User
                </p>
              </div>
              <pre>◌</pre>
            </FadeSection>
          </div>

          <div className="w-[50px]"/>

          <div className="flex flex-col items-start w-[60%] min-w-[400px]">
            <FadeSection durationMs={1500} from="translate-y-[50px]" to="translate-y-0">
              <span className="font-jetbrainsmono text-8xl bg-gradient-to-r from-[#872341] to-[#F05941] bg-clip-text text-transparent">
                About Me
              </span>
            </FadeSection>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1700}>
                  <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[37px] mr-2"/>
                </FadeSection>
                <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={2000}>
                  <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm my-[30px] " />
                </FadeSection>
              </div>
              <div className="grid grid-cols-2">
                <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                  <div className="flex flex-col items-center justify-center">
                    <TfiLocationPin size={70} color="#BE3144"/>
                    <p className="font-jetbrainsmono text-lg mt-4 text-center">Central Java, Indonesia</p>
                  </div>
                </FadeSection>
                <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                  <div className="flex flex-col items-center justify-center">
                    <FaUserTie size={70} color="#BE3144"/>
                    <p className="font-jetbrainsmono text-lg mt-4 text-center">Available For Work</p>
                  </div>
                </FadeSection>
              </div>
               {/* <ul className="font-jetbrainsmono">
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Name         : </pre>
                <p className="text-lg">Toba Amiruddin Sitorus</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Location     : </pre>
                <p className="text-lg">Special Region of Yogyakarta, Indonesia</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Phone Number : </pre>
                <p className="text-lg">+62 8123 4567 890</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Email        : </pre>
                <p className="text-lg">amir@gmail.com</p>
              </li>
            </ul> */}
              {/* <div className="flex flex-row">
                <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1700}>
                  <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[37px] mr-2"/>
                </FadeSection>
                <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={2000}>
                  <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm mt-[30px] " />
                </FadeSection>
              </div> */}
            </div>


            {/* <ul className="font-jetbrainsmono">
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Name         : </pre>
                <p className="text-lg">Toba Amiruddin Sitorus</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Location     : </pre>
                <p className="text-lg">Special Region of Yogyakarta, Indonesia</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Phone Number : </pre>
                <p className="text-lg">+62 8123 4567 890</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Email        : </pre>
                <p className="text-lg">amir@gmail.com</p>
              </li>
            </ul> */}
          </div>

        </div>

        <div className="h-[50px]"/>

        <div className="grid grid-cols-4 w-[80%]">
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1200}>
            <div className="flex flex-col items-center justify-center py-3 border-l-4 border-[#F05931]">
              <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                <p className="font-jetbrainsmono">Years of Experience</p>
              </FadeSection>
              <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={700}>
                <p className="font-jetbrainsmono text-6xl">2+</p>
              </FadeSection>
            </div>
          </FadeSection>

          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1200}>
            <div className="flex flex-col items-center justify-center py-3 border-l-4 border-[#F05931]">
              <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                <p className="font-jetbrainsmono">Projects</p>
              </FadeSection>
              <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={700}>
                <p className="font-jetbrainsmono text-6xl">25</p>
              </FadeSection>
            </div>
          </FadeSection>

          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1200}>
            <div className="flex flex-col items-center justify-center py-3 border-l-4 border-[#F05931]">
              <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                <p className="font-jetbrainsmono">Clients</p>
              </FadeSection>
              <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={700}>
                <p className="font-jetbrainsmono text-6xl">14</p>
              </FadeSection>
            </div>
          </FadeSection>

          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1200}>
            <div className="flex flex-col items-center justify-center py-3 border-x-4 border-[#F05931]">
              <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
                <p className="font-jetbrainsmono">Language Mastered</p>
              </FadeSection>
              <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={700}>
                <p className="font-jetbrainsmono text-6xl">5</p>
              </FadeSection>
            </div>
          </FadeSection>
        </div>

      </div>
    );
  }

  export default MainSection2;