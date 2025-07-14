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
    "PostgreSql",
];

function Card(){
    return(
            <div className="grid grid-cols-7 gap-5">
                {
                    languageList.map((language, index) => (
                        <FadeSection key={language} from="translate-y-[20px]" to="translate-p-0" durationMs={(index + 2) * 250}>
                            <div className="flex flex-col items-center justify-center w-[170px] h-[170px] bg-[#872341] rounded-xl border border-spacing-1 border-[#2c2c2c] hover:border-[#d1d1d1] duration-500">
                                <img src={`/src/assets/images/${language}.svg`} alt={language} className="w-[60px] rounded-md"/>
                                <p className="font-jetbrainsmono text-xl mt-2">{language}</p>
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
        <div className="flex flex-col items-center justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth">

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