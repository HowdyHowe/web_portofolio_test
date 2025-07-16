import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";

const languageList = [
    "Python",
    "Flask",
    "Flutter",
    "Javascript",
    "Typescript",
    "Kotlin",
    "React",
    "Git",
    "Ubuntu",
    "ExpressJs",
    "MySql",
    "Sqlite",
];

function Card(){
    return(
            <div className="grid grid-cols-6 gap-4">
                {
                    languageList.map((language, index) => (
                        <FadeSection key={language} from="translate-y-[80px]" to="translate-p-0" durationMs={600 + (index * 100)}>
                            <div className="flex relative flex-col items-center justify-center w-[200px] h-[200px] bg-[#87234100] rounded-xl border-2 border-[#872341] hover:border-[#d1d1d1] duration-500">
                                <img src={`/src/assets/images/${language}.svg`} alt={language} className="w-[60px] rounded-md "/>
                                <div className="flex items-center justify-center absolute bottom-0 left-0 w-[150px] h-[50px] bg-[#d1d1d1] text-[#2c2c2c] rounded-bl-xl font-jetbrainsmono">{language}</div>
                            </div>
                        </FadeSection>
                    ))
                }
            </div>
    );
}

function MainSection2() {

    const {isDark} = useTheme()

    return(
        <div className="flex flex-col items-center justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth overflow-hidden">

            <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />
            <FadeSection from="translate-y-[30px]" to="translate-y-0" durationMs={1600}>
                <div className="mb-4">
                    <p className="font-jetbrainsmono text-5xl">My Skills</p>
                    <FadeSection from={"translate-y-[30px]"} to={"translate-y-0"} durationMs={1500}>
                        <div className="w-[500px] h-[20px] bg-[#F05941] rounded-e-3xl mt-1"/>
                    </FadeSection>
                </div>
            </FadeSection>

            <Card/>

        </div>
    )
}

export default MainSection2;