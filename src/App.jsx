import Navbar from "./components/Navbar/Navbar"
import ScrollIndicator from "./components/ScrollIndicator"
import { ThemeProvider } from "./constants/theme"
import About from "./container/About/About"
import Contact from "./container/Contact/Contact"
import Footer from "./container/Footer/Footer"
import Header from "./container/Header/Header"
import Skills from "./container/Skills/Skills"
import Work from "./container/Work/Work"

import MessengerCustomerChat from 'react-messenger-customer-chat';

import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Repos } from "./Repos/Repos"
AOS.init();

function App() {
  return (
    <ThemeProvider>
      <Navbar></Navbar>
      <ScrollIndicator></ScrollIndicator>
      <Header></Header>
      <About></About>
      <Work></Work>
      {/* <Repositories /> */}
      <Repos></Repos>
      <Skills></Skills>
      <Contact></Contact>
      <MessengerCustomerChat
        pageId="112561170394707"
        appId="261217793292489"
        // htmlRef="<REF_STRING>"
      />
      <Footer></Footer>
      <div className="color-layout layout-purple position-right-top" />
      <div className="color-layout layout-blue position-left-bottom" />
    </ThemeProvider>
  )
}

export default App
