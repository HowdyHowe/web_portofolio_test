import TextLoader from "../hooks/text-hook";
import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import { BiBook, BiBrain, BiBriefcase, BiCertification,  } from "react-icons/bi";


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
            <div className="grid grid-cols-5 gap-4">
                {
                    languageList.map((language, index) => (
                        <FadeSection key={language} from="translate-y-[80px]" to="translate-p-0" durationMs={700 + (index * 100)}>
                            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#87234100] rounded-xl border-2 border-[#872341] hover:border-[#d1d1d1] duration-500">
                                <img src={`/src/assets/images/${language}.svg`} alt={language} className="w-[50px] rounded-md "/>
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
            <div className="flex flex-col w-[20%] items-start justify-center">
                <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1300}>
                    <div className="flex items-center justify-center w-[100px] h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                        <BiBook size={20} className="mr-2"/>
                        <p className="font-jetbrainsmono text-base">Edu</p>
                    </div>
                </FadeSection>
                <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1500}>
                    <div className="flex items-center justify-center w-[100px] h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                        <BiBriefcase size={20} className="mr-2"/>
                        <p className="font-jetbrainsmono text-base">Exp</p>
                    </div>
                </FadeSection>
                <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1700}>
                    <div className="flex items-center justify-center w-[300px] h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                        <BiBrain size={20} className="mr-2"/>
                        <p className="font-jetbrainsmono text-base">Skills</p>
                    </div>
                </FadeSection>
                <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1900}>
                    <div className="flex items-center justify-center w-[100px] h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                        <BiCertification size={20} className="mr-2"/>
                        <p className="font-jetbrainsmono text-base">Cert</p>
                    </div>
                </FadeSection>
            </div>

            <div className="flex flex-col w-[30%] h-[600px] items-start justify-between">
                <FadeSection from={"translate-y-[-80px]"} to={"translate-y-0"} durationMs={1300}>
                    <p className="text-4xl font-jetbrainsmono">Skills</p>
                </FadeSection>
                <div className="flex flex-row">
                    <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1500}>
                        <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[37px] mr-2"/>
                    </FadeSection>
                    <FadeSection from={"translate-y-[-80px]"} to={"translate-y-0"} durationMs={1700}>
                        <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm my-[30px] text-justify" />
                    </FadeSection>
                </div>
                <Card/>
            </div>
        </div>
    )
}

export default MainSection2;