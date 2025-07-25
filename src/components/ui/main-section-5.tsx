import { LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";
import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import TooltipWidget from "./tooltip";
import Wave from "./wave";
import { AiOutlineX } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";

function MainSection5() {
  const {isDark} = useTheme();

    return (
      <div className="flex flex-row items-center justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth overflow-hidden">

        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />
        <FadeSection from="translate-y-0" to="translate-y-0" durationMs={2000}>
          <form action="" method="post" className="flex flex-col items-center justify-center w-[700px] h-[700px] max-h-[75%] rounded-3xl  bg-[#0e0e0e]">
            <p className="font-jetbrainsmono text-2xl mb-1">Connect With Me</p>
            <span className="font-jetbrainsmono text-6xl font-bold bg-gradient-to-r from-[#872341] to-[#F05941] bg-clip-text text-transparent">
              Send Me a Message
            </span>
            {/* <div className="w-[90%]">
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={2000}>
                <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm my-[30px]" />
              </FadeSection>
            </div> */}
            <div className="flex flex-row items-center justify-center mt-5">
              <FadeSection from="translate-x-[-50px]" to="translate-y-0" durationMs={1000}>
                <div className="flex items-center w-[300px] h-[50px] p-3 my-2 border border-[#872341] rounded-lg">
                  <input type="text" className="w-full h-full  bg-[#00000000]" placeholder="First Name"/>
                </div>
              </FadeSection>
              <div className="w-[25px]"/>
              <FadeSection from="translate-x-[50px]" to="translate-y-0" durationMs={1000}>
                <div className="flex items-center w-[300px] h-[50px] p-3 my-2 border border-[#872341] rounded-lg">
                  <input type="text" className="w-full h-full bg-[#00000000] " placeholder="Last Name"/>
                </div>
              </FadeSection>
            </div>
            <FadeSection from="translate-y-[50px]" to="translate-y-0" durationMs={700}>
              <div className="flex items-center w-[625px] h-[50px] p-3 my-2 border border-[#872341] rounded-lg">
                <input type="text" className="w-full h-full bg-[#00000000]" placeholder="Email Address"/>
              </div>
            </FadeSection>
            <FadeSection from="translate-y-[50px]" to="translate-y-0" durationMs={1000}>
              <div className="flex items-center w-[625px] h-[50px] p-3 my-2 border border-[#872341] rounded-lg">
                <input type="text" className="w-full h-full bg-[#00000000]" placeholder="Phone Number"/>
              </div>
            </FadeSection>
            <FadeSection from="translate-y-[50px]" to="translate-y-0" durationMs={1300}>
              <div className="flex items-center w-[625px] h-[200px] p-3 my-2 border border-[#872341] rounded-lg">
                <textarea className="w-full h-full bg-[#00000000] focus:outline-none focus:ring-0 resize-none scrollbar-thin scrollbar-thumb-[#F05941] scrollbar-track-transparent" placeholder="Message"/>
              </div>
            </FadeSection>

            <FadeSection from="translate-y-[50px]" to="translate-y-0" durationMs={1500}>
              <button type="button" className="flex items-center justify-center font-jetbrainsmono text-base w-[200px] h-[50px] mt-4 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05741] duration-500">
                Submit
              </button>
            </FadeSection>
          </form>
        </FadeSection>

        {/* <div className="flex flex-col items-center justify-center w-[800px] h-[600px] rounded-xl z-10">
          <p className="font-jetbrainsmono text-4xl mb-10">Send Me a Massage</p>
          <div className="flex flex-col items-center w-full justify-center">
            <div className="flex flex-row w-[90%] items-center justify-center">
              <div className="flex items-center w-[50%] h-[50px] mr-5  bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">First Name</div>
              <div className="flex items-center w-[50%] h-[50px] bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">Last Name</div>
            </div>
            <div className="flex items-center w-[90%] h-[50px]  bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">Email Address</div>
            <div className="flex items-center w-[90%] h-[50px]  bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">Phone Number</div>
            <div className="flex items-center w-[90%] h-[200px]  bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">Message</div>
          </div>
          <div className="mt-10">
            <p className="flex items-center justify-center font-jetbrainsmono text-base w-[150px] h-[50px] bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05741] duration-500">Send</p>
          </div>
        </div> */}

{/* =========================================================== */}

        {/* <div className="absolute w-full h-[200px] z-0 pointer-events-none ">
          <div className="absolute top-0 left-0 w-full h-full">
            <RadioWave time="animate-radioWave1 mt-5" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <RadioWave time="animate-radioWave2" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <RadioWave time="animate-radioWave3 mt-10" />
          </div>
        </div> */}

        <div className="absolute bottom-0 w-full">
          <Wave/>
        </div>

        <div className="absolute grid grid-cols-2 bottom-0 w-[75%] mx-[50px] h-[75px] z-50">
          <div className="flex flex-col items-start justify-center">
            {/* <p className="font-jetbrainsmono text-3xl font-bold">
              TOBA
            </p> */}
            <div className="flex flex-row">
              <BiCopyright size={25} className="mr-2"/>
              <p className="font-jetbrainsmono text-base mt-[2px]">Toba Amiruddin Sitorus. All Right Reserved</p>
            </div>
          </div>
          <div className="flex items-center justify-end ">
            <FadeSection from={"translate-y-[-50px]"} to={"translte-y-0"} durationMs={1300}>
              <ul className="flex flex-row items-center justify-center gap-[50px]">
                {/* <li>
                  <TooltipWidget scale={true} tooltipText="Github" duration="duration-700" link="https://www.google.com/">
                    <p className="font-jetbrainsmono text-lg mb-2">Find Me On</p>
                  </TooltipWidget>
                </li> */}
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
          </div>
        </div>

      </div>
    );
  }

  export default MainSection5;