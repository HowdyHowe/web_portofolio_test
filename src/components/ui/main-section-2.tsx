import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";

function MainSection2() {

    const {isDark} = useTheme()

    return(
        <div className="flex flex-col items-center justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth">

            <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />
            

        </div>
    )
}

export default MainSection2;