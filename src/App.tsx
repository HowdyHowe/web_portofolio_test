import ThemeProvider from "./components/hooks/theme-hook"
import Main from "./components/layout/main-content"
import Navbar from "./components/layout/navbar"
import './styles/main-section-style.scss'
import './styles/navbar-style.scss'
import './styles/footer-style.scss'
import './styles/main-style.scss'
import './styles/wavy-style.scss'
import './styles/font-face.scss'
import './styles/style.scss'

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Main/>
    </ThemeProvider>
)}

export default App;
