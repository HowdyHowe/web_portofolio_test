import { useEffect, useState } from "react"
import ThemeProvider from "./components/hooks/theme-hook"
import Main from "./components/layout/main-content"
import Navbar from "./components/layout/navbar"
import './styles/main-section-style.scss'
import './styles/navbar-style.scss'
import './styles/main-style.scss'
import './styles/wavy-style.scss'
import './styles/font-face.scss'
import './styles/style.scss'

function App() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed
    );

    const sections = document.querySelectorAll("div[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <Navbar active={activeId}/>
      <Main/>
    </ThemeProvider>
)}

export default App;
