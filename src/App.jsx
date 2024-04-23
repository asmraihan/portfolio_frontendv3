import Navbar from "./components/Navbar/Navbar"
import ScrollIndicator from "./components/ScrollIndicator"
import { ThemeProvider } from "./constants/theme"
import About from "./container/About/About"
import Contact from "./container/Contact/Contact"
import Footer from "./container/Footer/Footer"
import Header from "./container/Header/Header"
import Skills from "./container/Skills/Skills"
import Work from "./container/Work/Work"
import { Toaster } from 'react-hot-toast';
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Repos } from "./Repos/Repos"
import FbMsgChat from "./components/FbMsgChat"

AOS.init();

function App() {
  return (
    <ThemeProvider>
      <Navbar></Navbar>
      <ScrollIndicator></ScrollIndicator>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Repos></Repos>
      <Skills></Skills>
      <Contact></Contact>
      <FbMsgChat />
      <Toaster />
      <Footer></Footer>
      <div className="color-layout layout-purple position-right-top" />
      <div className="color-layout layout-blue position-left-bottom" />
    </ThemeProvider>
  )
}

export default App
