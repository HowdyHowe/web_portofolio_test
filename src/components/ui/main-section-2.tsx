import TextLoader from "../hooks/text-hook";
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
        <div className="flex flex-row items-center justify-center w-full h-screen snap-start scroll-smooth overflow-hidden">

            <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />
            <div className="flex flex-col w-[30%] items-center justify-center">
                <FadeSection from={"translate-y-[80px]"} to={"translate-y-0"} durationMs={1300}>
                    <div className="flex items-center justify-center w-[250px] h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                        <p className="font-jetbrainsmono text-base">Download</p>
                    </div>
                </FadeSection>
                <FadeSection from={"translate-y-[80px]"} to={"translate-y-0"} durationMs={1300}>
                    <div className="flex items-center justify-center w-[250px] h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                        <p className="font-jetbrainsmono text-base">CV</p>
                    </div>
                </FadeSection>
                <FadeSection from={"translate-y-[80px]"} to={"translate-y-0"} durationMs={1300}>
                    <div className="flex items-center justify-center w-[250px] h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                        <p className="font-jetbrainsmono text-base">Saya</p>
                    </div>
                </FadeSection>
                <FadeSection from={"translate-y-[80px]"} to={"translate-y-0"} durationMs={1300}>
                    <div className="flex items-center justify-center w-[250px] h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                        <p className="font-jetbrainsmono text-base">Saya</p>
                    </div>
                </FadeSection>
            </div>
            <div className="flex flex-col w-[30%] h-[400px] items-start justify-start">
                <p className="text-4xl font-jetbrainsmono">Download</p>
                <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm my-[30px] text-justify"/>
            </div>
        </div>
    )
}

export default MainSection2;