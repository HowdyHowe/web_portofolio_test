import { useTheme } from "../hooks/theme-hook";
import Fireflies from "./fireflies";
import FadeSection from "./fade";
import TextLoader from "../hooks/text-hook";

function MainSection2() {
  const {isDark} = useTheme();

    return (
      <div className="flex flex-col items-center justify-center relative w-full h-screen bg-cover bg-center snap-start scroll-smooth overflow-hidden">

        <Fireflies count={25} color={isDark ? "#2c2c2c": "#FAF6E9"} />

        <div className="flex flex-row w-[80%] items-center justify-center">
          <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1000}>
            <img src="/src/assets/images/picxample.jpg" alt="profile picture" className="w-[450px] max-w-[200] rounded-xl m-5"/>
          </FadeSection>
          <div className="w-[100px]"/>
          <div className="flex flex-col w-[60%]">
            <FadeSection durationMs={2000} from="translate-y-[50px]" to="translate-y-0">
              <h1 className="text-7xl font-jetbrainsmono text-center">About Me</h1>
            </FadeSection>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1700}>
                  <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[37px] mr-2"/>
                </FadeSection>
                <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={2000}>
                  <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm my-[30px] " />
                </FadeSection>
              </div>
               <ul className="font-jetbrainsmono">
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Name         : </pre>
                <p className="text-lg">Toba Amiruddin Sitorus</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Location     : </pre>
                <p className="text-lg">Special Region of Yogyakarta, Indonesia</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Phone Number : </pre>
                <p className="text-lg">+62 8123 4567 890</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Email        : </pre>
                <p className="text-lg">amir@gmail.com</p>
              </li>
            </ul>
              <div className="flex flex-row">
                <FadeSection from={"translate-x-[50px]"} to={"translate-y-0"} durationMs={1700}>
                  <div className="w-[50px] h-[5px] bg-[#F05941]  rounded-2xl mt-[37px] mr-2"/>
                </FadeSection>
                <FadeSection from={"translate-y-[-70px]"} to={"translate-y-0"} durationMs={2000}>
                  <TextLoader file="/src/assets/texts/main-section-1.txt" cname="font-jetbrainsmono text-sm mt-[30px] " />
                </FadeSection>
              </div>
            </div>


            {/* <ul className="font-jetbrainsmono">
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Name         : </pre>
                <p className="text-lg">Toba Amiruddin Sitorus</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Location     : </pre>
                <p className="text-lg">Special Region of Yogyakarta, Indonesia</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Phone Number : </pre>
                <p className="text-lg">+62 8123 4567 890</p>
              </li>
              <li className="flex flex-row items-center justify-start mb-4">
<pre className="text-xl">Email        : </pre>
                <p className="text-lg">amir@gmail.com</p>
              </li>
            </ul> */}
          </div>

        </div>

      </div>
    );
  }

  export default MainSection2;