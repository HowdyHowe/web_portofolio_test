import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";
import FadeSection from "./fade";
import TextLoader from "../hooks/text-hook";
import { MdCode, MdDns, MdEmail, MdLocationPin, MdPerson, MdPhone, MdSmartphone } from "react-icons/md";
// function RandomColorBox({ colors}: { colors: string[]}) {
//   const [currentColor, setCurrentColor] = useState(colors[0]);

//   useEffect(() => {
//     const randomDuration = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
//     const interval = setInterval(() => {
//       const randomColor = colors[Math.floor(Math.random() * colors.length)];
//       setCurrentColor(randomColor);
//     }, randomDuration);

//     return () => clearInterval(interval); // cleanup
//   }, [colors]);

//   return (
//     // <div className={`w-40 h-40`} style={{ backgroundColor: currentColor }}>
//     //   <p className="text-white text-center pt-16">{currentColor}</p>
//     // </div>
//     <div className="border-[#2c2c2c] border-b-[8px]" style={{backgroundColor: currentColor}}/>
//   );
// }

function MainSection2() {
  // const colorList = ["#d1d1d1", "#000000", "#939393", "#a3a3a3", "#808080"]
  const {isDark} = useTheme();

  return (
    <div className="flex flex-row items-end justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth overflow-hidden" id="aboutme">

        {/* <div className="flex-1 grid grid-rows-24 h-[60%] text-xs">
          <RandomColorBox colors={colorList}/>
          <RandomColorBox colors={colorList}/>
          <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
          <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
          <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
          <RandomColorBox colors={colorList}/>
          <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
          <div className="bg-[#a3a3a3] border-[#2c2c2c] border-b-[8px]"/>
          <RandomColorBox colors={colorList}/>
          <div className="bg-[#a3a3a3] border-[#2c2c2c] border-b-[8px]"/>
          <RandomColorBox colors={colorList}/>
          <RandomColorBox colors={colorList}/>
          <div className="bg-[#4e4e4e] border-[#2c2c2c] border-b-[8px]"/>
          <div className="bg-[#000000] border-[#2c2c2c] border-b-[8px]"/>
          <div className="bg-[#a3a3a3] border-[#2c2c2c] border-b-[8px]"/>
          <RandomColorBox colors={colorList}/>
          <div className="bg-[#808080] border-[#2c2c2c] border-b-[8px]"/>
          <div className="bg-[#808080] border-[#2c2c2c] border-b-[8px]"/>
          <div className="bg-[#808080] border-[#2c2c2c] border-b-[8px]"/>
          <RandomColorBox colors={colorList}/>
          <div className="bg-[#808080] border-[#2c2c2c] border-b-[8px]"/>
          <RandomColorBox colors={colorList}/>
          <div className="bg-[#808080] border-[#2c2c2c] border-b-[8px]"/>
        </div> */}


        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />
        <div className="flex flex-col items-center justify-center w-[90%] h-full pt-[100px]">
          <div className="z-20 w-[200px] min-w-[200px] ">
            <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={1000}>
              <img src="/src/assets/images/picxample.jpg" alt="profile picture" className="rounded-full"/>
            </FadeSection>
          </div>
          <FadeSection from={"translate-y-[50px]"} to={"translate-y-0"} durationMs={700}>
            <div className="mb-[20px] font-jetbrainsmono text-2xl">I'm Toba Amiruddin Sitorus</div>
          </FadeSection>

          <FadeSection durationMs={1200} from="translate-y-[50px]" to="translate-y-0">
            <span className="font-jetbrainsmono text-8xl bg-gradient-to-r from-[#872341] to-[#F05941] bg-clip-text text-transparent">
              About Me
            </span>
          </FadeSection>
          <div className="flex flex-row w-[1000px] min-w-[700px]">
            <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1700}>
              <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[28px] mr-2"/>
            </FadeSection>
            <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1500}>
              <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm my-[20px] " />
            </FadeSection>
          </div>
          <div className="flex flex-row-reverse items-center justify-center">
            <div className="flex flex-col items-start justify-center w-[350px] min-w-[350px] mb-[25px]">
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center mb-2">
                  <MdEmail size={40} color="#BE3144" className="w-[60px] h-[60px] p-[15px] mr-2 bg-[#2c2c2c] rounded-lg"/>
                  <p className="font-jetbrainsmono text-lg text-center">amiruddinamir@gmail.com</p>
                </div>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center mb-2">
                  <MdPhone size={40} color="#BE3144" className="w-[60px] h-[60px] p-[15px] mr-2 bg-[#2c2c2c] rounded-lg"/>
                  <p className="font-jetbrainsmono text-lg text-center">+628 12 3456 7890</p>
                </div>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center mb-2">
                  <MdLocationPin size={40} color="#BE3144" className="w-[60px] h-[60px] p-[14px] mr-2 bg-[#2c2c2c] rounded-lg"/>
                  <p className="font-jetbrainsmono text-lg text-center">Central Java, Indonesia</p>
                </div>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center mb-2">
                  <MdPerson size={40} color="#BE3144" className="w-[60px] h-[60px] p-[13px] mr-2 bg-[#2c2c2c] rounded-lg"/>
                  <p className="font-jetbrainsmono text-lg text-center">Available For Work</p>
                </div>
              </FadeSection>
            </div>


            <div className="flex flex-col items-start justify-start w-[600px]">
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1400}>
                <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                  <MdCode size={37} color="#BE3144" className="min-w-[40px]"/>
                  <p className="font-jetbrainsmono text-xl ml-6">
                    Frontend Development
                  </p>
                </div>
                <pre>◌</pre>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1200}>
                <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                  <MdDns  size={35} color="#BE3144" className="min-w-[40px]"/>
                  <p className="font-jetbrainsmono text-xl ml-6">
                    Backend Development
                  </p>
                </div>
                <pre>◌</pre>
              </FadeSection>
              <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={1000}>
                <div className="flex flex-row items-center justify-center ml-[3px] py-5 px-8 border-l-2 border-[#872341]">
                  <MdSmartphone size={35} color="#BE3144" className="min-w-[40px]"/>
                  <p className="font-jetbrainsmono text-xl ml-6">
                    Android App Development
                  </p>
                </div>
                <pre>◌</pre>
              </FadeSection>
            </div>
          </div>
        </div>


        {/* <div className="flex-1 grid grid-cols-2 h-[80%]">
          <div className="grid grid-rows-28">
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#a3a3a3] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#a3a3a3] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#000000] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#a3a3a3] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#a3a3a3] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#a3a3a3] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#000000] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#a3a3a3] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#000000] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
          </div>
          <div className="grid grid-rows-28">
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#000000] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#000000] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#000000] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#d1d1d1] border-[#2c2c2c] border-b-[8px]"/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
            <RandomColorBox colors={colorList}/>
            <div className="bg-[#939393] border-[#2c2c2c] border-b-[8px]"/>
          </div>
        </div> */}

      </div>
    );
  }

  export default MainSection2;