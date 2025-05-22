import ThemeProvider from "./components/hooks/theme-hook"
import Main from "./components/layout/main-content"
import Navbar from "./components/layout/navbar"
import Wave from "./components/ui/wave"
import './styles/style.scss'

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Main/>
      <Wave/>
    </ThemeProvider>
)}

export default App;
