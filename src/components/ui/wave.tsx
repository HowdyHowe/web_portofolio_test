import { useTheme } from "../hooks/theme-hook";
import Footer from "../layout/footer";

function Wave () {
    const { isDark } = useTheme();
    return (
        <div>
            <div className={`fixed bottom-0 w-full h-[7.5em] z-10 ${isDark ? "bg-[#F2F2F2]":"bg-[#2C2C2C]"}`}/>
            <div className="wave"/>
            <div className="wave"/>
            <div className="wave"/>
            <div className="wave"/>
            <Footer/>
        </div>
    )
}

export default Wave;