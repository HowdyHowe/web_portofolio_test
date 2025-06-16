import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";

function MainSection1() {
  const {isDark} = useTheme();

  return (
    <div className="main-section">
      <div className="absolute inset-0 left-0 w-full; h-full bg-cover bg-center z-[-1] opacity-0 animate-fadeIn"
          style={{ backgroundImage: isDark ? "url('/src/assets/images/background-section-1-light.svg')": "url('/src/assets/images/background-section-1-dark.svg')"  }}/>
      <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"}/>

      <div className="main-section-1-content">
        <img src="/src/assets/images/picxample.jpg" alt="profile picture" className="w-[200px] rounded-full"/>
        <p className="font-jetbrainsmono">
          hi nama saya toba amiruddin sitorus
        </p>
      </div>
    </div>
  );
}

export default MainSection1;