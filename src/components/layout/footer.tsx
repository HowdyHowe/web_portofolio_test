import { useTheme } from "../hooks/theme-hook";
import Wave from "../ui/wave";

function Footer () {
    const {isDark} = useTheme();
    return (
        <footer className="footer">
            <Wave/>
            <div className={`bottom-0 w-full h-[7.5em] transition-colors duration-1000 ${isDark ? "bg-[#F2F2F2]":"bg-[#2C2C2C]"}`}/>
            {/* <div className="footer-content">
                <ul>
                    <li>contoh</li>
                    <li>contoh</li>
                    <li>contoh</li>
                </ul>
            </div>
            <div className="footer-content">
                <ul>
                    <li>contoh</li>
                    <li>contoh</li>
                    <li>contoh</li>
                </ul>
            </div>
            <div className="footer-content">
                <ul>
                    <li>contoh</li>
                    <li>contoh</li>
                    <li>contoh</li>
                </ul>
            </div> */}
        </footer>
    )
}

export default Footer;