import FadeSection from "./fade";

type info = {
    key: string,
    icon: React.ReactNode,
}

function SkillsCard({skillList}: {skillList:info[]}){
    return(
        <FadeSection from="translate-y-[80px]" to="translate-p-0" durationMs={700}>
            <div className="grid grid-cols-5 gap-4">
                {
                    skillList.map(({key, icon}) => (
                            <div key={key} className="flex flex-col items-center justify-center w-[100px] h-[100px] p-[14px] mr-2 bg-[#2c2c2c] rounded-lg">
                                {icon}
                            </div>
                    ))
                }
            </div>
        </FadeSection>
    );
}

export default SkillsCard;