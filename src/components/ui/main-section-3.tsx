import { useTheme } from "../hooks/theme-hook";
import Fireflies from "../layout/fireflies";
import FadeSection from "./fade-section";

function MainSection3() {
  const {isDark} = useTheme();

    return (
      <div className="main-section relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center">

        {/* <div className="absolute bottom-0 z-[-1] h-[10%] aspect-video bg-no-repeat"
          style={{ backgroundImage: isDark ? "url('/src/assets/images/background-section-3-light.png')" : "url('/src/assets/images/background-section-3-dark.png')",
          backgroundSize: 'contain',}}/> */}
        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />
        <FadeSection durationMs={1000}>
          <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
        </FadeSection>
        <FadeSection durationMs={1500}>
          <p className="mt-4 text-lg text-center">
            This is a simple example of a main section component no 3.
          </p>
        </FadeSection>
      </div>
    );
  }

  export default MainSection3;