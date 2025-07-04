import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";
import FadeSection from "./fade";
import RadioWave from "./snake";
import Wave from "./wave";

function MainSection4() {
  const {isDark} = useTheme();

    return (
      <div className="flex flex-col items-center justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth overflow-hidden">

        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />

        <FadeSection durationMs={2000} from="translate-y-[50px]" to="translate-y-0">
          <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
        </FadeSection>
        <FadeSection durationMs={1500} from="translate-y-[50px]" to="translate-y-0">
          <p className="mt-4 text-lg text-center">
            This is a simple example of a main section component no 3.
          </p>
        </FadeSection>

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

  export default MainSection4;