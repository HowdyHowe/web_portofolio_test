import FadeSection from "./fade";

type info = {
    organizer: string,
    event: string,
    year: string,
}

function ResumeCard( {resumeList}: {resumeList:info[]} ) {
    return (
        <FadeSection from="translate-y-[80px]" to="translate-p-0" durationMs={700}>
            <div className="grid grid-cols-2 gap-4 font-jetbrainsmono">
                {
                    resumeList.map(({organizer, event, year}) => (
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

export default ResumeCard;