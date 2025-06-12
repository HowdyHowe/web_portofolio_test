import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";
import FadeSection from "./fade";

function MainSection2() {
  const {isDark} = useTheme();

    return (
      <div className="main-section relative w-full h-screen bg-cover bg-center">
        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/>
        <div className="absolute z-[-1] w-[80%] max-w-[800px] h-auto aspect-video"
          style={{ backgroundImage: isDark ? "url('/src/assets/images/background-section-2-light.svg')" : "url('/src/assets/images/background-section-2-dark.svg')",
          backgroundSize: 'contain',}}/>
        <FadeSection durationMs={1000} from="translate-y-[50px]" to="translate-y-0">
          <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
        </FadeSection>
        <FadeSection durationMs={1500} from="translate-y-[50px]" to="translate-y-0">
          <p className="mt-4 text-lg text-center">
            This is a simple example of a main section component no 2.
          </p>
        </FadeSection>
      </div>
    );
  }

  export default MainSection2;