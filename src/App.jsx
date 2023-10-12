
import './App.css'
import About from './assets/components/About/About'
import Blog from './assets/components/Blog/Blog'
import Blog1 from './assets/components/Blog1/Blog1'
import  Foote  from './assets/components/Footer/Footer'
import Home from './assets/components/Home/Home'
import Navbar from './assets/components/Navbar/Navbar'
import News from './assets/components/news/News'

import AnimationScroll from './assets/components/scroll/ScrollAnimation'

function App() {


  return (
    <>
     <Navbar/>
    <AnimationScroll>
      <Home/>
    </AnimationScroll>
    <AnimationScroll>
      <About/>
    </AnimationScroll>
    <AnimationScroll>
      <Blog/>
    </AnimationScroll>
    <AnimationScroll>
      <Blog1/>
    </AnimationScroll>
    <AnimationScroll>
      <News/>
    </AnimationScroll>
    <Foote/>
    </>
  )
}

export default App
