import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";
import RadioWave from "./snake";
import Wave from "./wave";

function MainSection5() {
  const {isDark} = useTheme();

    return (
      <div className="flex flex-row items-center justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth overflow-hidden">

        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />

        <div className="flex flex-col items-center justify-center w-[800px] h-[600px] rounded-xl z-10">
          <p className="font-jetbrainsmono text-4xl mb-10">Send Me a Massage</p>
          <div className="flex flex-col items-center w-full justify-center">
            <div className="flex flex-row w-[90%] items-center justify-center">
              <div className="flex items-center w-[50%] h-[50px] mr-5  bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">First Name</div>
              <div className="flex items-center w-[50%] h-[50px] bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">Last Name</div>
            </div>
            <div className="flex items-center w-[90%] h-[50px]  bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">Email Address</div>
            <div className="flex items-center w-[90%] h-[50px]  bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">Phone Number</div>
            <div className="flex items-center w-[90%] h-[300px]  bg-[#2c2c2c] p-5 my-2 border border-[#872341] rounded-lg">Message</div>
          </div>
          <div className="mt-10">
            <p className="flex items-center justify-center font-jetbrainsmono text-base w-[150px] h-[50px] bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05741] duration-500">Send</p>
          </div>
        </div>

{/* =========================================================== */}

        <div className="absolute w-full h-[200px] z-0 pointer-events-none ">
          <div className="absolute top-0 left-0 w-full h-full">
            <RadioWave time="animate-radioWave1 mt-5" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <RadioWave time="animate-radioWave2" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <RadioWave time="animate-radioWave3 mt-10" />
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <Wave/>
        </div>

      </div>
    );
  }

  export default MainSection5;