import React,{useState,useEffect,useRef} from "react";

//export const CreateContext = React.createContext()
const AnimationScroll=({children})=>{
  const [opacity,setOpacity]=useState(0)
   const elementRef= useRef(null)
   useEffect(()=>{
     const scrollHandle=()=>{
        const element = elementRef.current
        const top = element.getBoundingClientRect().top
        const height= window.innerHeight * 0.6
        if(top < height){
          setOpacity(1)
        }else{
          setOpacity(0)
        }
     }
     scrollHandle()
     window.addEventListener('scroll', scrollHandle)
     return ()=>{
       window.removeEventListener('scroll', scrollHandle)
     }
     
   })
   return (
     <section ref={elementRef}  style={{opacity, transition:'.8s'}}>
        {children}
     </section>
   )
}

export default AnimationScroll