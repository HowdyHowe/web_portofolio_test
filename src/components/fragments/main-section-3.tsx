// import { useTheme } from "../hooks/theme-hook";
import { useState } from "react";
import TextLoader from "../hooks/text-hook";
import FadeSection from "../widget/fade";
import Fireflies from "../widget/fireflies";
import TooltipWidget from "../widget/tooltip";
import SkillsCard from "../widget/skill-card";
import ResumeCard from "../widget/resume-card";
import data from "../data/section-3.json"
import { FaFlutter, FaPython } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { BiBook, BiBrain, BiBriefcase, BiCertification,  } from "react-icons/bi";
import { SiExpress, SiFlask, SiGit, SiJavascript, SiKotlin, SiMysql, SiNextdotjs, SiReact, SiSqlite, SiTypescript, SiUbuntu } from "react-icons/si";


const languageList = [
    {key: "1", icon: <FaPython size={46} color="#BE3144"/>},
    {key: "2", icon: <SiFlask size={42} color="#BE3144"/>},
    {key: "3", icon: <FaFlutter size={40} color="#BE3144"/>},
    {key: "4", icon: <SiJavascript size={40} color="#BE3144"/>},
    {key: "5", icon: <SiTypescript size={40} color="#BE3144"/>},
    {key: "6", icon: <SiKotlin size={35} color="#BE3144"/>},
    {key: "7", icon: <SiReact size={40} color="#BE3144"/>},
    {key: "8", icon: <SiNextdotjs size={40} color="#BE3144"/>},
    {key: "9", icon: <SiGit size={40} color="#BE3144"/>},
    {key: "10", icon: <SiUbuntu size={40} color="#BE3144"/>},
    {key: "11", icon: <SiExpress size={43} color="#BE3144"/>},
    {key: "12", icon: <SiMysql size={45} color="#BE3144"/>},
    {key: "13", icon: <SiSqlite size={40} color="#BE3144"/>},
]

function Card({category}: {category:string}) {
    switch(category) {
        case "Educations":
            return <ResumeCard resumeList={data.educationsList}/>
        case "Experiences":
            return <ResumeCard resumeList={data.experiencesList}/>
        case "Skills":
            return <SkillsCard skillList={languageList}/>
        case "Certifications":
            return <ResumeCard resumeList={data.certificationsList}/>
    }
}


function MainSection3() {
    // hook useTheme pada section 3
    // const {isDark} = useTheme()
    const [curInfo, setInfo] = useState("Educations")

    const changeInfo = (info:string) => {
        setInfo(info)
    }

    return(
        <div className="main-section-3" id="resume">

            {/* Penggunaan useTheme hook */}
            {/* <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} /> */}

            <Fireflies count={25} color={"#FAF6E9"} />

            <div className="flex flex-row items-center justify-center h-full">
                <div className="flex flex-col w-[350px] items-start justify-center">
                    <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1200}>
                        <TooltipWidget scale={false} tooltipText="Educations" duration="duration-500" onClick={() => changeInfo("Educations")}>
                            <div className={`flex items-center justify-center h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500 ${curInfo == "Educations" ? "w-[300px]" : "w-[100px]"}`}>
                                <BiBook size={20} className="mr-2"/>
                                {curInfo == "Educations" ? <p className="font-jetbrainsmono text-base">Educations</p> : <p className="font-jetbrainsmono text-base">Edu</p>}
                            </div>
                        </TooltipWidget>
                    </FadeSection>
                    <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1400}>
                        <TooltipWidget scale={false} tooltipText="Experiences" duration="duration-500" onClick={() => changeInfo("Experiences")}>
                            <div className={`flex items-center justify-center h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500 ${curInfo == "Experiences" ? "w-[300px]" : "w-[100px]"}`}>
                                <BiBriefcase size={20} className="mr-2"/>
                                {curInfo == "Experiences" ? <p className="font-jetbrainsmono text-base">Experiences</p> : <p className="font-jetbrainsmono text-base">Exp</p>}
                            </div>
                        </TooltipWidget>
                    </FadeSection>
                    <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1600}>
                        <TooltipWidget scale={false} tooltipText="Skills" duration="duration-500" onClick={() => changeInfo("Skills")}>
                            <div className={`flex items-center justify-center h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500 ${curInfo == "Skills" ? "w-[300px]" : "w-[100px]"}`}>
                                <BiBrain size={20} className="mr-2"/>
                                {curInfo == "Skills" ? <p className="font-jetbrainsmono text-base">Skills</p> : <p className="font-jetbrainsmono text-base">Skill</p>}
                            </div>
                        </TooltipWidget>
                    </FadeSection>
                    <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1800}>
                        <TooltipWidget scale={false} tooltipText="Certifications" duration="duration-500" onClick={() => changeInfo("Certifications")}>
                            <div className={`flex items-center justify-center h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500 ${curInfo == "Certifications" ? "w-[300px]" : "w-[100px]"}`}>
                                <BiCertification size={20} className="mr-2"/>
                                {curInfo == "Certifications" ? <p className="font-jetbrainsmono text-base">Certifications</p> : <p className="font-jetbrainsmono text-base">Cert</p>}
                            </div>
                        </TooltipWidget>
                    </FadeSection>
                </div>

                <div className="flex flex-col w-[50%] h-[650px] max-w-[600px] min-w-[600px] items-start justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div key={curInfo} initial={{opacity:0, x:60}} animate={{opacity:1, x:0}} exit={{opacity:0, x:60}} transition={{duration:0.4}}>
                            <FadeSection from={"translate-y-[-80px]"} to={"translate-y-0"} durationMs={1200}>
                                <span className="font-jetbrainsmono text-6xl bg-gradient-to-r from-[#872341] to-[#F05941] bg-clip-text text-transparent">
                                    {curInfo}
                                </span>
                            </FadeSection>
                            <div className="flex flex-row h-[200px]">
                                <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1400}>
                                    <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[37px] mr-2"/>
                                </FadeSection>
                                <FadeSection from={"translate-y-[-80px]"} to={"translate-y-0"} durationMs={1400}>
                                    <TextLoader file={`/src/assets/texts/${curInfo}.txt`} cname="font-jetbrainsmono text-sm my-[30px]" />
                                </FadeSection>
                            </div>
                            <div className="overflow-auto h-[400px] scrollbar-thin scrollbar-thumb-[#F05941] scrollbar-track-transparent">
                                <Card category={curInfo}/>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default MainSection3;