import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";
import RadioWave from "./snake";
import Wave from "./wave";

function MainSection5() {
  const {isDark} = useTheme();

    return (
      <div className="flex flex-row items-center justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth overflow-hidden">

        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />

        <div className="flex items-center justify-center w-[500px] h-[500px] bg-[#d1d1d1] rounded-xl z-10">
          contoh
        </div>

        <div className="flex items-center justify-center w-[500px] h-[500px] border-2 rounded-xl z-10">
          <ul className="font-jetbrainsmono">
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
            </ul>
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