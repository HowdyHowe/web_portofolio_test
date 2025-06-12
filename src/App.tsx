import ThemeProvider from "./components/hooks/theme-hook"
import Footer from "./components/layout/footer"
import Main from "./components/layout/main-content"
import Navbar from "./components/layout/navbar"
import './styles/style.scss'

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Main/>
      <Footer/>
    </ThemeProvider>
)}

export default App;
