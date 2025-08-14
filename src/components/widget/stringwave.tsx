import String from "./string";


function TestWidget() {
    return(
        <>
            <div className="absolute w-full h-[200px] z-0 pointer-events-none ">
                <div className="absolute top-0 left-0 w-full h-full">
                    <String color="#872341" time="animate-radioWave1 mt-1" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <String color="#F05741" time="animate-radioWave1 mt-3"/>
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <String color="#872341" time="animate-radioWave1 mt-5" />
                </div>
            </div>
            <div className="absolute w-full h-[200px] z-0 pointer-events-none ">
                <div className="absolute top-0 left-0 w-full h-full">
                    <String color="#F05741" time="animate-radioWave1 mt-7" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <String color="#872341" time="animate-radioWave1 mt-9"/>
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <String color="#F05741" time="animate-radioWave1 mt-11" />
                </div>
            </div>
            <div className="absolute w-full h-[200px] rotate-180 z-0 pointer-events-none ">
                <div className="absolute bottom-0 left-0 w-full h-full">
                    <String color="#872341" time="animate-radioWave1"/>
                </div>
                <div className="absolute bottom-2 left-0 w-full h-full">
                    <String color="#F05741" time="animate-radioWave1" />
                </div>
                <div className="absolute bottom-4 left-0 w-full h-full">
                    <String color="#872341" time="animate-radioWave1" />
                </div>
            </div>
            <div className="absolute w-full h-[200px] rotate-180 z-0 pointer-events-none ">
                <div className="absolute bottom-6 left-0 w-full h-full">
                    <String color="#F05741" time="animate-radioWave1"/>
                </div>
                <div className="absolute bottom-8 left-0 w-full h-full">
                    <String color="#872341" time="animate-radioWave1" />
                </div>
                <div className="absolute bottom-10 left-0 w-full h-full">
                    <String color="#F05741" time="animate-radioWave1" />
                </div>
            </div>
        </>
    )
}

export default TestWidget;