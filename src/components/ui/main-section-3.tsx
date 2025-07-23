import { useState } from "react";
import TextLoader from "../hooks/text-hook";
import { useTheme } from "../hooks/theme-hook";
import FadeSection from "./fade";
import Fireflies from "./fireflies";
import { BiBook, BiBrain, BiBriefcase, BiCertification,  } from "react-icons/bi";
import TooltipWidget from "./tooltip";
import { AnimatePresence, motion } from "framer-motion";


const educationsList = [
    {organizer: "Contoh PT", event:"Contoh Kegiatan 1", year:"2020 - 2022"},
    {organizer: "Contoh PT", event:"Contoh Kegiatan 2", year:"2020 - 2022"},
    {organizer: "Contoh PT", event:"Contoh Kegiatan 3", year:"2020 - 2022"},
    {organizer: "Contoh PT", event:"Contoh Kegiatan 4", year:"2020 - 2022"},
    {organizer: "Contoh PT", event:"Contoh Kegiatan 5", year:"2020 - 2022"},
    {organizer: "Contoh PT", event:"Contoh Kegiatan 6", year:"2020 - 2022"}
]

const experiencesList = [
    {organizer: "Contoh Pengalaman", event:"Contoh Pengalaman 1", year:"2020 - 2022"},
    {organizer: "Contoh Pengalaman", event:"Contoh Pengalaman 2", year:"2020 - 2022"},
    {organizer: "Contoh Pengalaman", event:"Contoh Pengalaman 3", year:"2020 - 2022"},
    {organizer: "Contoh Pengalaman", event:"Contoh Pengalaman 4", year:"2020 - 2022"},
    {organizer: "Contoh Pengalaman", event:"Contoh Pengalaman 5", year:"2020 - 2022"},
    {organizer: "Contoh Pengalaman", event:"Contoh Pengalaman 6", year:"2020 - 2022"}
]

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
]

const certificationsList = [
    {organizer: "Contoh Sertifikat", event:"Contoh Sertifikat 1", year:"2020 - 2022"},
    {organizer: "Contoh Sertifikat", event:"Contoh Sertifikat 2", year:"2020 - 2022"},
    {organizer: "Contoh Sertifikat", event:"Contoh Sertifikat 3", year:"2020 - 2022"},
    {organizer: "Contoh Sertifikat", event:"Contoh Sertifikat 4", year:"2020 - 2022"},
    {organizer: "Contoh Sertifikat", event:"Contoh Sertifikat 5", year:"2020 - 2022"},
    {organizer: "Contoh Sertifikat", event:"Contoh Sertifikat 6", year:"2020 - 2022"}
]

function Card({category}: {category:string}) {
    switch(category) {
        case "Educations":
            return <EducationsCard/>
        case "Experiences":
            return <ExperiencesCard/>
        case "Skills":
            return <SkillsCard/>
        case "Certifications":
            return <CertificationsCard/>
    }
}

function EducationsCard() {
    return (
        <FadeSection from="translate-y-[80px]" to="translate-p-0" durationMs={700}>
            <div className="grid grid-cols-2 gap-4 font-jetbrainsmono">
                {
                    educationsList.map(({organizer, event, year}) => (
                            <div className="flex flex-col h-[150px] items-start justify-evenly px-5 rounded-xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                                <p className="text-sm">{organizer}</p>
                                <p className="text-xl">{event}</p>
                                <p className="text-xs">• {year}</p>
                            </div>
                    ))
                }
            </div>
        </FadeSection>
    )
}

function ExperiencesCard() {
    return (
        <FadeSection from="translate-y-[80px]" to="translate-p-0" durationMs={700}>
            <div className="grid grid-cols-2 gap-4 font-jetbrainsmono">
                {
                    experiencesList.map(({organizer, event, year}) => (
                            <div className="flex flex-col h-[150px] items-start justify-evenly px-5 rounded-xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                                <p className="text-sm">{organizer}</p>
                                <p className="text-xl">{event}</p>
                                <p className="text-xs">• {year}</p>
                            </div>
                    ))
                }
            </div>
        </FadeSection>
    )
}

function SkillsCard(){
    return(
            <div className="grid grid-cols-5 gap-4">
                {
                    languageList.map((language, index) => (
                        <FadeSection key={language} from="translate-y-[80px]" to="translate-p-0" durationMs={700 + (index * 100)}>
                            <div className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#87234100] rounded-xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                                <img src={`/src/assets/images/${language}.svg`} alt={language} className="w-[50px] rounded-md "/>
                            </div>
                        </FadeSection>
                    ))
                }
            </div>
    );
}

function CertificationsCard() {
    return (
        <FadeSection from="translate-y-[80px]" to="translate-p-0" durationMs={700}>
            <div className="grid grid-cols-2 gap-4 font-jetbrainsmono">
                {
                    certificationsList.map(({organizer, event, year}) => (
                            <div className="flex flex-col h-[150px] items-start justify-evenly px-5 rounded-xl border-2 border-[#872341] hover:border-[#F05941] duration-500">
                                <p className="text-sm text-[#F05941]">{organizer}</p>
                                <p className="text-xl">{event}</p>
                                <p className="text-xs opacity-75">• {year}</p>
                            </div>
                    ))
                }
            </div>
        </FadeSection>
    )
}


function MainSection3() {

    const {isDark} = useTheme()
    const [curInfo, setInfo] = useState("Educations")

    const changeInfo = (info:string) => {
        setInfo(info)
    }

    return(
        <div className="flex flex-row items-center justify-center w-full h-screen relative snap-start scroll-smooth overflow-hidden">

            <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />

            <div className="flex flex-row items-center justify-center h-full">
                <div className="flex flex-col w-[350px] items-start justify-center">
                    <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1300}>
                        <TooltipWidget scale={false} tooltipText="Educations" duration="duration-500" onClick={() => changeInfo("Educations")}>
                            <div className={`flex items-center justify-center h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500 ${curInfo == "Educations" ? "w-[300px]" : "w-[100px]"}`}>
                                <BiBook size={20} className="mr-2"/>
                                {curInfo == "Educations" ? <p className="font-jetbrainsmono text-base">Educations</p> : <p className="font-jetbrainsmono text-base">Edu</p>}
                            </div>
                        </TooltipWidget>
                    </FadeSection>
                    <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1500}>
                        <TooltipWidget scale={false} tooltipText="Experiences" duration="duration-500" onClick={() => changeInfo("Experiences")}>
                            <div className={`flex items-center justify-center h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500 ${curInfo == "Experiences" ? "w-[300px]" : "w-[100px]"}`}>
                                <BiBriefcase size={20} className="mr-2"/>
                                {curInfo == "Experiences" ? <p className="font-jetbrainsmono text-base">Experiences</p> : <p className="font-jetbrainsmono text-base">Exp</p>}
                            </div>
                        </TooltipWidget>
                    </FadeSection>
                    <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1700}>
                        <TooltipWidget scale={false} tooltipText="Skills" duration="duration-500" onClick={() => changeInfo("Skills")}>
                            <div className={`flex items-center justify-center h-[50px] my-2 bg-[#87234100] rounded-2xl border-2 border-[#872341] hover:border-[#F05941] duration-500 ${curInfo == "Skills" ? "w-[300px]" : "w-[100px]"}`}>
                                <BiBrain size={20} className="mr-2"/>
                                {curInfo == "Skills" ? <p className="font-jetbrainsmono text-base">Skills</p> : <p className="font-jetbrainsmono text-base">Skill</p>}
                            </div>
                        </TooltipWidget>
                    </FadeSection>
                    <FadeSection from={"translate-x-[80px]"} to={"translate-y-0"} durationMs={1900}>
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
                        <motion.div key={curInfo} initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:50}} transition={{duration:0.4}}>
                            <FadeSection from={"translate-y-[-80px]"} to={"translate-y-0"} durationMs={1300}>
                                <span className="font-jetbrainsmono text-6xl bg-gradient-to-r from-[#872341] to-[#F05941] bg-clip-text text-transparent">
                                    {curInfo}
                                </span>
                            </FadeSection>
                            <div className="flex flex-row h-[200px]">
                                <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1500}>
                                    <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[37px] mr-2"/>
                                </FadeSection>
                                <FadeSection from={"translate-y-[-80px]"} to={"translate-y-0"} durationMs={1700}>
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